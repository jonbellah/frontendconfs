import React from 'react';

import Header from './Header';
import Conference from './Conference';

import conferences from './assets/data/conferences';

const App = () => {
  const conferenceList = conferences.map(item => <Conference key={item.index} {...item} />);

  return (
    <div className="App">
      <Header />
      <table className="container">
        {conferenceList}
      </table>
    </div>
  );
};

export default App;
