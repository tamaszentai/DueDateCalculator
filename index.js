// Function for checking the date is on weekend or not

const isWeekend = (date) => {
  if (date.getUTCDay() === 6 || date.getUTCDay() === 0) {
    return true;
  } else {
    return false;
  }
};

// Function for checking the time is in out of hours or not

const isOutOfWorkingHours = (date) => {
  if (date.getUTCHours() < 9 || date.getUTCHours() >= 17) {
    return true;
  } else {
    return false;
  }
};

exports.isWeekend = isWeekend;
exports.isOutOfWorkingHours = isOutOfWorkingHours;
