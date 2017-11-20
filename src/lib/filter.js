/**
 * Filter open calls
 */
function filterOpenCalls(confs) {
  const filtered = [];

  Object.values(confs).forEach(function(conf) {
    if (conf.cfpDeadline === false) {
      return false;
    }

    const currentDate = new Date();
    const deadline = new Date(conf.cfpDeadline);
  
    if (deadline > currentDate) {
      filtered.push(conf);
    }
  });

  return filtered;
}

/**
 * Filter continents
 */
function filterContinents(confs, val) {
  const filtered = [];

  confs.forEach(function(conf) {
    if (Object.values(conf.location).includes(val)) {
      filtered.push(conf);
    }
  });

  return filtered;
}
/**
 * Filter data by selected options
 */
function filterBy(confs, filter, val = false) {
  if (filter === 'cfpDeadline') {
    return filterOpenCalls(confs);
  }

  if (filter === 'continent') {
    return filterContinents(confs, val);
  }

  return false;
}

export default filterBy;
