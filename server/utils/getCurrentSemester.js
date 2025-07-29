const getCurrentSemester = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  let duration;
  if (month >= 0 && month <= 4) {
    duration = "Spring";
  } else if (month >= 5 && month <= 8) {
    duration = "Summer";
  } else {
    duration = "Fall";
  }

  return {
    year,
    duration,
  };
};

export default getCurrentSemester;
