import React, { Component } from 'react';

import Header from './Header';
import Conference from './Conference';
import Filters from './Filters';
import Footer from './Footer';

import conferences from './assets/data/conferences';
import filterBy from './lib/filter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filtered: false,
      confs: conferences,
    };

    this.doFilter = this.doFilter.bind(this);
  }

  doFilter(event) {
    const { confs } = this.state;
    const filtered = filterBy(confs, event.target.dataset.filter);

    this.setState({
      filtered: true,
      confs: filtered,
    });
  }

  render() {
    const { confs, filtered } = this.state;
    const conferenceList = confs.map(item => <Conference key={item.index} {...item} />);

    return (
      <div className="App">
        <Header />
        {filtered}
        <div className="container d:f flx-d:r">
          <table className="w:9of12">
            {conferenceList}
          </table>

          <Filters childDoFilter={this.doFilter} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
