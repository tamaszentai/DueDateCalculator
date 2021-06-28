// Function for checking the date is on weekend or not

const isWeekend = (date) => {
    if (date.getUTCDay() === 6 || date.getUTCDay() === 0) {
        return true
    } else {
        return false;
    }
}

exports.isWeekend = isWeekend;