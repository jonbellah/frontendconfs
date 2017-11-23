import React from 'react';
import moment from 'moment';

import Circle from '../components/Circle';

/**
 * Helper to display the dates that a conference will be happening.
 */
function getDates(startDate, endDate) {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Only one day
  if (start.getDate() === end.getDate()) {
    return moment(start).format('MMM D, YYYY');
  }

  // If all conference days fall within the same month
  if (start.getMonth() === end.getMonth()) {
    return `${monthNames[start.getMonth()]} ${start.getDate()}-${end.getDate()}, ${end.getFullYear()}`;
  }

  // If all conference days fall within the same year
  if (start.getFullYear() === end.getFullYear()) {
    return `${monthNames[start.getMonth()]} ${start.getDate()}-${monthNames[end.getMonth()]} ${end.getDate()}, ${end.getFullYear()}`;
  }

  return false;
}

/**
 * Helper to display whether a conference has an open call for speakers.
 */
function hasOpenCall(cfpDeadline) {
  if (cfpDeadline === false) {
    return <Circle color="#eee" />;
  }

  const currentDate = new Date();
  const deadline = new Date(cfpDeadline);

  if (deadline > currentDate) {
    return <Circle color="green" />;
  }

  return <Circle color="red" />;
}

/**
 * Helper to display a CoC link.
 */
function cocLink(link) {
  if (link) {
    return <a href={link}>View</a>;
  }

  return '';
}

/**
 * Helper to display conference link.
 */
function confLink(link, conf) {
  return <a href={link}>{conf}</a>;
}

export { getDates, hasOpenCall, cocLink, confLink };
