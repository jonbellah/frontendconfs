import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Table from './Table';

const App = () => (
  <div className="App">
    <Header />

    <div className="container">
      <Table />
    </div>

    <Footer />
  </div>
);

export default App;
