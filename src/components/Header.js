import React from 'react';

import logo from '../assets/images/microphone.svg';

const Header = () => (
  <header id="masthead" className="bg-white b-b:off-white p:4 m-b:6">
    <div className="container d:f j-c:s-b a-i:c header-container">
      <h1 className="logo color-dark-gray f:2 d:f a-i:c">
        <img src={logo} className="m-r:.5" />
        Front-End Conferences
      </h1>
      <a href="https://github.com/jonbellah/frontendconfs/" className="btn--primary">&#x2b; Add Conference</a>
    </div>
  </header>
);

export default Header;
