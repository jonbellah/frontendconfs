import confs2018 from './2018';

const emptyArray = [];
const conferences = emptyArray.concat(confs2018);

// Sort by start date
conferences.sort((a, b) => {
  const keyA = new Date(a.startDate);
  const keyB = new Date(b.startDate);

  // Compare the 2 dates
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});

export default conferences;
