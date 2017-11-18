function getDates(startDate, endDate) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start.getDay() === end.getDay()) {
    return startDate;
  }

  if (start.getMonth() === end.getMonth()) {
    return `${monthNames[start.getMonth()]} ${start.getDay()}-${end.getDay()}, ${end.getFullYear()}`;
  }

  return 'test';
}

export { getDates };
