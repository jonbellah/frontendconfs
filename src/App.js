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
    this.resetFilters = this.resetFilters.bind(this);
    this.renderResetFilters = this.renderResetFilters.bind(this);
    this.updateHistory = this.updateHistory.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
  }

  doFilter(event) {
    const { confs } = this.state;
    const { filter } = event.target.dataset;
    const filtered = filterBy(confs, filter);

    this.setState({
      filtered: true,
      confs: filtered,
    });
  }

  resetFilters() {
    this.setState({
      filtered: false,
      confs: conferences,
    });
  }

  renderResetFilters() {
    const { filtered } = this.state;

    if (filtered) {
      return <button onClick={this.resetFilters}>Reset Filters</button>;
    }

    return <div />;
  }

  render() {
    const { confs } = this.state;
    const conferenceList = confs.map(item => <Conference key={item.index} {...item} />);

    return (
      <div className="App">
        <Header />

        <div className="container d:f flx-d:r">
          <table className="w:9of12">
            {conferenceList}
          </table>

          <Filters childDoFilter={this.doFilter} />
          {this.renderResetFilters()}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
