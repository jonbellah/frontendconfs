import confs2017 from './2017';
import confs2018 from './2018';

const emptyArray = [];
const conferences = emptyArray.concat(confs2017).concat(confs2018);

// Sort by start date
conferences.sort(function(a, b){
  const keyA = new Date(a.startDate);
  const keyB = new Date(b.startDate);
  // Compare the 2 dates
  if(keyA < keyB) return -1;
  if(keyA > keyB) return 1;
  return 0;
});

export default conferences;
