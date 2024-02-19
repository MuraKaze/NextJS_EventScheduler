// calendar.js
class CustomCalendar {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  daysInMonth(year, month) {
    const monthLengths = [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return monthLengths[month];
  }

  // Get the starting day of the month (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  startingDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
  }

  generateCalendar() {
    const numberOfDays = this.daysInMonth(this.year, this.month);
    const startingDay = this.startingDayOfMonth(this.year, this.month);
    const calendar = [];
    let day = 1;

    // Populate the first row with nulls until the starting day of the month
    const firstRow = Array(startingDay).fill(null);
    let remainingDays = 7 - startingDay;
    while (remainingDays > 0 && day <= numberOfDays) {
      firstRow.push(day++);
      remainingDays--;
    }
    calendar.push(firstRow);

    // Populate the remaining rows
    while (day <= numberOfDays) {
      const row = Array(7).fill(null);
      for (let i = 0; i < 7 && day <= numberOfDays; i++) {
        row[i] = day++;
      }
      calendar.push(row);
    }

    return calendar;
  }
}

export default CustomCalendar;
