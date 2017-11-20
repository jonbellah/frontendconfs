import React from 'react';

import Header from './Header';
import Footer from './Footer';
import ConfTable from './Table';

const App = () => (
  <div className="App">
    <Header />

    <div className="container">
      <ConfTable />
    </div>

    <Footer />
  </div>
);

export default App;
