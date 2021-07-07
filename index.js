// Function for checking the date is on weekend or not

const isWeekend = (date) => {
  return (date.getUTCDay() === 6 || date.getUTCDay() === 0)
};

// Function for checking the time is in out of hours or not

const isOutOfWorkingHours = (date) => {
  return (date.getUTCHours() < 9 || date.getUTCHours() >= 17)
};

// Main function

const calculateDueDate = (date, turnaround) => {
  const turnaroundInMinutes = turnaround * 60;

  if (isWeekend(date)) {
    return "Can\'t submit on weekends!";
  }

  if (isOutOfWorkingHours(date)) {
    return "Can\'t submit out of working hours!";
  }

  let counter = 0;
  while (counter < turnaroundInMinutes) {
    date.setUTCMinutes(date.getUTCMinutes() + 1);
    if (!(isWeekend(date) || isOutOfWorkingHours(date))) {
      counter++;
    }
  }
  return date;
};

const inputDate = new Date(Date.UTC(2021, 5, 28, 16, 59));

console.log(calculateDueDate(inputDate, 10));

exports.isWeekend = isWeekend;
exports.isOutOfWorkingHours = isOutOfWorkingHours;
exports.calculateDueDate = calculateDueDate;
