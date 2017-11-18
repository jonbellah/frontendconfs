/**
 * Helper to display the dates that a conference will be happening.
 */
function getDates(startDate, endDate) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Only one day
  if (start.getDate() === end.getDate()) {
    return startDate;
  }

  // If all conference days fall within the same month
  if (start.getMonth() === end.getMonth()) {
    return `${monthNames[start.getMonth()]} ${start.getDate()}-${end.getDate()}, ${end.getFullYear()}`;
  }

  // If all conference days fall within the same year
  if (start.getFullYear() === end.getFullYear()) {
    return `${monthNames[start.getMonth()]} ${start.getDate()} - ${monthNames[end.getMonth()]} ${end.getDate()}, ${end.getFullYear()}`;
  }

  return false;
}

/**
 * Helper to display whether a conference has an open call for speakers.
 */
function hasOpenCall(cfpDeadline) {
  if (cfpDeadline === false) {
    return;
  }

  const currentDate = new Date();
  const deadline = new Date(cfpDeadline);

  if (deadline > currentDate) {
    return 'Open Call for Papers';
  }

  return 'Call for Papers Closed';
}

export { getDates, hasOpenCall };
