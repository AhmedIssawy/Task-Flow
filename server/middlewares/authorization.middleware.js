const authorize = (allowedRoles) => {
  return (req, res, next) => {
    const user = req.user;
    
    if (!user) {
      return res.status(403).json({ message: "Forbidden" });
    }

    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    // console.log("Authorized user:", user.id, "with role:", user.role);
    
    next();
  };
};
export default authorize;
