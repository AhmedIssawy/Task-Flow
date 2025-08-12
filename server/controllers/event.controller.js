import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import sendResponse from "../utils/response.handler.js";
import Event from "../models/event.model.js";
// Import models for validation and population
import Student from "../models/student.model.js";
import Teacher from "../models/teacher.model.js";
import Admin from "../models/admin.model.js";
import Section from "../models/section.model.js";
import Course from "../models/course.model.js";
import University from "../models/university.model.js";
import College from "../models/college.model.js";
import Department from "../models/department.model.js";

// Helper function to check if user can assign to a target based on their role and scope
const canAssignToTarget = async (user, assignedTo) => {
  const { type, targetIds } = assignedTo;
  if (!type || !targetIds || targetIds.length === 0) return true; // No specific assignment, generally allowed

  // Determine user's scope
  let userUniversityId, userCollegeId, userDepartmentId;
  if (user.role === 'student' || user.role === 'teacher') {
    userUniversityId = user.universityId?.toString();
    userCollegeId = user.collegeId?.toString();
    userDepartmentId = user.departmentId?.toString();
  } else if (user.role === 'admin' || user.role === 'super-admin') {
    // Based on the models, Admin stores universityId and collegeId as Strings, not ObjectIds.
    // We need to find the actual University/College documents to get their ObjectIds for comparison.
    const userUniversity = await University.findById(user.universityId);
    const userCollege = await College.findById(user.collegeId);
    userUniversityId = userUniversity?._id.toString();
    userCollegeId = userCollege?._id.toString();
    // Admin model in the provided code doesn't have departmentId.
    // We'll assume scope check for Admin is up to College level for now.
    // If Admin needs department-level scope, the model should be updated.
  }

  // Check based on assignment type
  switch (type) {
    case "individual":
      // Check if all targetIds (student IDs) belong to the user's scope
      const students = await Student.find({ _id: { $in: targetIds } }).select('universityId collegeId departmentId');
      return students.every(student =>
        student.universityId?.toString() === userUniversityId &&
        student.collegeId?.toString() === userCollegeId
        // Admin scope check for department is omitted as Admin model lacks departmentId
      );
    case "section":
      const sections = await Section.find({ _id: { $in: targetIds } }).select('universityId collegeId departmentId');
      return sections.every(section =>
        section.universityId?.toString() === userUniversityId &&
        section.collegeId?.toString() === userCollegeId
        // Admin scope check for department is omitted
      );
    case "course":
      const courses = await Course.find({ _id: { $in: targetIds } }).select('universityId collegeId departmentId');
      return courses.every(course =>
        course.universityId?.toString() === userUniversityId &&
        course.collegeId?.toString() === userCollegeId
        // Admin scope check for department is omitted
      );
    case "department":
       // Only Admins/Super-Admins should assign to departments, and within their scope
       if (user.role !== 'admin' && user.role !== 'super-admin') return false;
       if (user.role === 'super-admin') return true; // Super-Admin can assign anywhere
       const departments = await Department.find({ _id: { $in: targetIds } }).select('collegeId');
       // For Admin, check if the department's college matches their college
       // This assumes Admin scope is limited to their college.
       return departments.every(dept => dept.collegeId?.toString() === userCollegeId);
    case "college":
       if (user.role !== 'admin' && user.role !== 'super-admin') return false;
       if (user.role === 'super-admin') return true;
       const colleges = await College.find({ _id: { $in: targetIds } }).select('universityId');
       return colleges.every(college => college.universityId?.toString() === userUniversityId);
    case "university":
       if (user.role !== 'super-admin') return false; // Only Super-Admin
       return true;
    default:
      return false;
  }
};

// @desc    Create a new event
// @route   POST /api/events
// @access  Private (Teacher, Admin, Super-Admin)
const createEvent = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const user = req.user;

  // Basic validation
  const { title, startDateTime, type, assignedTo } = req.body;
  if (!title || !startDateTime || !type) {
     const errorMessage = lang === "ar" ? "العنوان ووقت البدء والنوع مطلوبان" : "Title, start date/time, and type are required";
     return sendResponse(res, {
       success: false,
       statusCode: 400,
       message: errorMessage,
     });
  }

  // Determine creator model
  let creatorModel;
  if (user.role === 'student') creatorModel = 'Student';
  else if (user.role === 'teacher') creatorModel = 'Teacher';
  else if (user.role === 'admin' || user.role === 'super-admin') creatorModel = 'Admin';

  // Check assignment permissions
  const isAssignmentAllowed = await canAssignToTarget(user, assignedTo || {});
  if (!isAssignmentAllowed) {
     const errorMessage = lang === "ar" ? "غير مصرح لك بالتعيين لهذه المجموعة" : "You are not authorized to assign to this target";
     return sendResponse(res, {
       success: false,
       statusCode: 403,
       message: errorMessage,
     });
  }

  // Set scope IDs based on assignedTo or user's scope if not assigned to specific entities
  let universityId, collegeId, departmentId;
  if (assignedTo && assignedTo.targetIds && assignedTo.targetIds.length > 0) {
    // Logic to determine scope from assignedTo targets is complex and depends on type.
    // For simplicity in initial phase, derive from the user's scope.
    // A more robust implementation would query the assigned entities to get their scope.
    // This is a simplified approach.
    if (user.role === 'student' || user.role === 'teacher') {
      universityId = user.universityId;
      collegeId = user.collegeId;
      departmentId = user.departmentId;
    } else if (user.role === 'admin') {
      universityId = user.universityId;
      collegeId = user.collegeId;
      // departmentId needs specific logic for Admin, perhaps from assignedTo if it's a department type.
    } else if (user.role === 'super-admin') {
      // Scope for super admin events might be global or derived from assignedTo.
      // For now, leave them potentially null or derive if needed.
    }
  } else {
    // No specific assignment, derive from user
     if (user.role === 'student' || user.role === 'teacher') {
      universityId = user.universityId;
      collegeId = user.collegeId;
      departmentId = user.departmentId;
    } else if (user.role === 'admin') {
      universityId = user.universityId;
      collegeId = user.collegeId;
    }
    // Super-admin scope handled above or left implicit
  }

  // Create event object
  const eventData = {
    ...req.body,
    creator: user._id,
    creatorModel,
    universityId,
    collegeId,
    departmentId,
  };

  const event = new Event(eventData);
  const createdEvent = await event.save();

  // Populate creator details for response
  const populatedEvent = await Event.findById(createdEvent._id)
    .populate('creator', 'name') // Populate creator name
    .populate('assignedTo.targetIds') // Basic population, might need refinement based on type
    .lean();

  const successMessage = lang === "ar" ? "تم إنشاء الحدث بنجاح" : "Event created successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: successMessage,
    data: populatedEvent,
  });
});

// @desc    Get events for the authenticated user (calendar view)
// @route   GET /api/events
// @access  Private
const getEvents = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const user = req.user;
  const { startDate, endDate, type, status } = req.query;

  // Build base query
  let query = {};

  // Date range filter
  if (startDate || endDate) {
    query.startDateTime = {};
    if (startDate) query.startDateTime.$gte = new Date(startDate);
    if (endDate) query.startDateTime.$lte = new Date(endDate);
  }

  // Type filter
  if (type) {
    query.type = type;
  }

  // Status filter
  if (status) {
    query.status = status;
  }

  // Visibility logic based on user role
  const userObjectId = new mongoose.Types.ObjectId(user._id);
  if (user.role === 'student') {
    // Students see events assigned to them directly or to their sections/courses
    // 1. Get student's sections and courses
    const student = await Student.findById(user._id).select('courses');
    if (!student) {
       const errorMessage = lang === "ar" ? "الطالب غير موجود" : "Student not found";
       return sendResponse(res, {
         success: false,
         statusCode: 404,
         message: errorMessage,
       });
    }
    const studentSectionIds = student.courses.map(c => c.section);
    const studentCourseIds = student.courses.map(c => c.course);

    query.$or = [
      { 'assignedTo.type': 'individual', 'assignedTo.targetIds': userObjectId },
      { 'assignedTo.type': 'section', 'assignedTo.targetIds': { $in: studentSectionIds } },
      { 'assignedTo.type': 'course', 'assignedTo.targetIds': { $in: studentCourseIds } },
      { creator: userObjectId } // Unlikely for students, but possible corner case?
    ];

    // Scope restriction for student
    query.universityId = user.universityId;
    query.collegeId = user.collegeId;
    query.departmentId = user.departmentId;

  } else if (user.role === 'teacher') {
    // Teachers see events they created or events for courses/sections they teach
    // 1. Get teacher's sections and courses (assuming sections are linked via courses or directly)
    // The current Teacher model has `courses: [ObjectId]`. We need to find sections linked to these courses.
    // This requires looking into the Course model or Section model to find the link.
    // Let's assume for now we can get section IDs related to the teacher's courses.
    // A more robust way would be to query Section model where teachers array includes this teacher.
    // Let's do that:
    const sectionsForTeacher = await Section.find({ teachers: userObjectId }).select('_id');
    const teacherSectionIds = sectionsForTeacher.map(s => s._id);
    // Get course IDs from the teacher's direct course list
    const teacherCourseIds = user.courses; // Array of ObjectIds from Teacher model

    query.$or = [
      { creator: userObjectId },
      { 'assignedTo.type': 'section', 'assignedTo.targetIds': { $in: teacherSectionIds } },
      { 'assignedTo.type': 'course', 'assignedTo.targetIds': { $in: teacherCourseIds } },
      // Events assigned directly to the teacher (if that's a use case?)
      // { 'assignedTo.type': 'individual', 'assignedTo.targetIds': userObjectId }
    ];

    // Scope restriction for teacher
    query.universityId = user.universityId;
    query.collegeId = user.collegeId;
    query.departmentId = user.departmentId;

  } else if (user.role === 'admin') {
    // Admins see events within their university/college scope
    // They see events they created or events for students/teachers in their scope
    query.$or = [
      { creator: userObjectId },
      // Events for students/teachers within admin's scope
      // This is handled by the scope filters below
    ];

    // Scope restriction for admin
    // Need to resolve string IDs to ObjectIds for Admin
    const userUniversity = await University.findById(user.universityId);
    const userCollege = await College.findById(user.collegeId);
    query.universityId = userUniversity?._id;
    query.collegeId = userCollege?._id;
    // Admin scope assumed to be college level, so no departmentId filter from Admin directly.
    // Events themselves store ObjectIds, so the query should match ObjectIds.

  } else if (user.role === 'super-admin') {
    // Super-admins see all events (potentially) or events within their assigned scope (if scoped)
    // No additional query restrictions for global view, or apply their specific scope filters
  }

  try {
    // Execute query with population for essential data in list view
    const events = await Event.find(query)
      .populate('creator', 'name role') // Populate creator name and role
      // .populate('assignedTo.targetIds', 'name') // Population depends on assignedTo.type, complex in list view, might be too heavy
      .sort({ startDateTime: 1 })
      .select('title startDateTime endDateTime dueDateTime type status') // Select summary fields for list view
      .lean();

    const successMessage = lang === "ar" ? "تم استرداد الأحداث بنجاح" : "Events retrieved successfully";
    return sendResponse(res, {
      success: true,
      statusCode: 200,
      message: successMessage,
      data: events,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    const errorMessage = lang === "ar" ? "حدث خطأ أثناء استرداد الأحداث" : "Error retrieving events";
    return sendResponse(res, {
      success: false,
      statusCode: 500,
      message: errorMessage,
    });
  }
});

// @desc    Get event by ID
// @route   GET /api/events/:id
// @access  Private
const getEventById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const user = req.user;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const errorMessage = lang === "ar" ? "معرف الحدث غير صالح" : "Invalid event ID";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  try {
    const event = await Event.findById(id);

    if (!event) {
      const errorMessage = lang === "ar" ? "الحدث غير موجود" : "Event not found";
      return sendResponse(res, {
        success: false,
        statusCode: 404,
        message: errorMessage,
      });
    }

    // Authorization check: Can user view this event?
    let isAuthorized = false;
    const userObjectId = new mongoose.Types.ObjectId(user._id);

    if (event.creator.equals(userObjectId)) {
      // Creator can always view
      isAuthorized = true;
    } else if (user.role === 'student') {
      // Student can view if assigned directly or belongs to assigned group
      if (event.assignedTo?.type === 'individual' && event.assignedTo?.targetIds?.some(tid => tid.equals(userObjectId))) {
        isAuthorized = true;
      } else {
        // Check if student belongs to the section/course the event is assigned to
        const student = await Student.findById(user._id).select('courses');
        if (student) {
           const studentSectionIds = student.courses.map(c => c.section.toString());
           const studentCourseIds = student.courses.map(c => c.course.toString());
           if (
             (event.assignedTo?.type === 'section' && event.assignedTo?.targetIds?.some(tid => studentSectionIds.includes(tid.toString()))) ||
             (event.assignedTo?.type === 'course' && event.assignedTo?.targetIds?.some(tid => studentCourseIds.includes(tid.toString())))
           ) {
             isAuthorized = true;
           }
        }
      }

    } else if (user.role === 'teacher') {
       // Teacher can view if they created it or if it's related to their courses/sections
       if (event.creatorModel === 'Teacher' && event.creator.equals(userObjectId)) {
         isAuthorized = true;
       } else {
         // Check if teacher teaches the course/section the event is assigned to
         // Get section IDs for this teacher
         const sectionsForTeacher = await Section.find({ teachers: userObjectId }).select('_id');
         const teacherSectionIds = sectionsForTeacher.map(s => s._id.toString());
         const teacherCourseIds = user.courses.map(c => c.toString()); // Array of ObjectIds from Teacher model

         if (
           (event.assignedTo?.type === 'section' && event.assignedTo?.targetIds?.some(tid => teacherSectionIds.includes(tid.toString()))) ||
           (event.assignedTo?.type === 'course' && event.assignedTo?.targetIds?.some(tid => teacherCourseIds.includes(tid.toString())))
         ) {
           isAuthorized = true;
         }
       }

    } else if (user.role === 'admin') {
      // Admin can view if within their scope or they created it
      if (event.creator.equals(userObjectId)) {
        isAuthorized = true;
      } else {
        // Need to resolve Admin's string IDs to ObjectIds for comparison
        const userUniversity = await University.findById(user.universityId);
        const userCollege = await College.findById(user.collegeId);
        const userUniversityId = userUniversity?._id.toString();
        const userCollegeId = userCollege?._id.toString();

        if (
          event.universityId?.toString() === userUniversityId &&
          event.collegeId?.toString() === userCollegeId
          // Admin scope assumed to be college level
        ) {
          isAuthorized = true;
        }
      }

    } else if (user.role === 'super-admin') {
      // Super-admin can view any event
      isAuthorized = true;
    }

    if (!isAuthorized) {
      const errorMessage = lang === "ar" ? "غير مصرح لك بعرض هذا الحدث" : "You are not authorized to view this event";
      return sendResponse(res, {
        success: false,
        statusCode: 403,
        message: errorMessage,
      });
    }

    // Populate relevant details for the detailed view
    const populatedEvent = await Event.findById(id)
      .populate('creator', 'name role email') // More details for creator
      // Populate based on assignedTo.type if needed for detailed view
      // Example: If assigned to a section, populate section name
      // This requires dynamic population which is complex, or specific populate calls
      // based on assignedTo.type. Simplified for now.
      .lean();

    const successMessage = lang === "ar" ? "تم استرداد الحدث بنجاح" : "Event retrieved successfully";
    return sendResponse(res, {
      success: true,
      statusCode: 200,
      message: successMessage,
      data: populatedEvent,
    });
  } catch (error) {
    console.error("Error fetching event:", error);
    const errorMessage = lang === "ar" ? "حدث خطأ أثناء استرداد الححدث" : "Error retrieving event";
    return sendResponse(res, {
      success: false,
      statusCode: 500,
      message: errorMessage,
    });
  }
});

// @desc    Update event by ID
// @route   PUT /api/events/:id
// @access  Private (Creator, Admin, Super-Admin)
const updateEvent = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const user = req.user;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const errorMessage = lang === "ar" ? "معرف الحدث غير صالح" : "Invalid event ID";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  try {
    const event = await Event.findById(id);

    if (!event) {
      const errorMessage = lang === "ar" ? "الحدث غير موجود" : "Event not found";
      return sendResponse(res, {
        success: false,
        statusCode: 404,
        message: errorMessage,
      });
    }

    // Authorization check: Can user update this event?
    let isAuthorized = false;
    const userObjectId = new mongoose.Types.ObjectId(user._id);

    if (event.creator.equals(userObjectId)) {
      // Creator can update
      isAuthorized = true;
    } else if (user.role === 'admin') {
      // Admin can update if within their scope
      if (
        event.universityId?.toString() === user.universityId &&
        event.collegeId?.toString() === user.collegeId
        // && (event.departmentId?.toString() === user.departmentId || !user.departmentId)
      ) {
        isAuthorized = true;
      }
    } else if (user.role === 'super-admin') {
      // Super-admin can update any event
      isAuthorized = true;
    }

    if (!isAuthorized) {
      const errorMessage = lang === "ar" ? "غير مصرح لك بتحديث هذا الحدث" : "You are not authorized to update this event";
      return sendResponse(res, {
        success: false,
        statusCode: 403,
        message: errorMessage,
      });
    }

    // Validate updated assignedTo (if provided)
     const { assignedTo } = req.body;
     if (assignedTo) {
        const isAssignmentAllowed = await canAssignToTarget(user, assignedTo);
        if (!isAssignmentAllowed) {
           const errorMessage = lang === "ar" ? "غير مصرح لك بالتعيين لهذه المجموعة" : "You are not authorized to assign to this target";
           return sendResponse(res, {
             success: false,
             statusCode: 403,
             message: errorMessage,
           });
        }
        // If assignment is valid, update scope IDs based on new assignedTo
        // (Similar logic to creation, simplified here)
         if (assignedTo.targetIds && assignedTo.targetIds.length > 0) {
            if (user.role === 'student' || user.role === 'teacher') {
              event.universityId = user.universityId;
              event.collegeId = user.collegeId;
              event.departmentId = user.departmentId;
            } else if (user.role === 'admin') {
              event.universityId = user.universityId;
              event.collegeId = user.collegeId;
            } else if (user.role === 'super-admin') {
              // Scope might change, derive from assignedTo or leave as is
            }
         }
     }


    // Update event fields (exclude protected fields like creator, createdAt)
    Object.keys(req.body).forEach(key => {
      if (key !== 'creator' && key !== 'createdAt' && key !== '_id' && key !== '__v') {
        event[key] = req.body[key];
      }
    });

    const updatedEvent = await event.save();

    // Populate for response
    const populatedEvent = await Event.findById(updatedEvent._id)
      .populate('creator', 'name role')
      .populate('assignedTo.targetIds') // Refine based on type if needed
      .lean();

    const successMessage = lang === "ar" ? "تم تحديث الحدث بنجاح" : "Event updated successfully";
    return sendResponse(res, {
      success: true,
      statusCode: 200,
      message: successMessage,
      data: populatedEvent,
    });
  } catch (error) {
    console.error("Error updating event:", error);
    const errorMessage = lang === "ar" ? "حدث خطأ أثناء تحديث الحدث" : "Error updating event";
    return sendResponse(res, {
      success: false,
      statusCode: 500,
      message: errorMessage,
    });
  }
});

// @desc    Delete event by ID
// @route   DELETE /api/events/:id
// @access  Private (Creator, Admin, Super-Admin)
const deleteEvent = asyncHandler(async (req, res) => {
  // Placeholder logic - to be implemented in Phase 2
  // This will involve finding the event, checking user authorization, and deleting

  const lang = req.cookies?.lang || "en";
  const { id } = req.params;

  // Simulate deleting an event
  if (id === "1") {
    const successMessage = lang === "ar" ? "تم حذف الحدث بنجاح (временно)" : "Event deleted successfully (placeholder)";
    return sendResponse(res, {
      success: true,
      statusCode: 200,
      message: successMessage,
    });
  } else {
    const errorMessage = lang === "ar" ? "الحدث غير موجود" : "Event not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }
});

export {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};