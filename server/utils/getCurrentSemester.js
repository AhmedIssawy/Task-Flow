const getCurrentSemester = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  let semester;
  if (month >= 0 && month <= 4) {
    semester = "Spring";
  } else if (month >= 5 && month <= 8) {
    semester = "Summer";
  } else if (month >= 9 && month <= 11) {
    semester = "Fall";
  } else {
    semester = null;
  }

  return {
    year,
    semester,
  };
};

export default getCurrentSemester;
