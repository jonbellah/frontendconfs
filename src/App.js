import React from 'react';

import Header from './Header';
import Conference from './Conference';

import conferences from './data/conferences';

const App = () => {
  const conferenceList = conferences.map(item => <Conference key={item.index} {...item} />);

  return (
    <div className="App">
      <Header />
      {conferenceList}
    </div>
  );
};

export default App;
