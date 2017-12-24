import React from 'react';

import logo from '../assets/images/megaphone.svg';

const Header = () => (
  <header id="masthead" className="bg-dark-gray p:4 m-b:8">
    <div className="container d:f j-c:s-b a-i:c">
      <h1 className="logo color-mid-gray f:2 d:f a-i:c">
        <img src={logo} className="m-r:1" />
        Front-End Conferences
      </h1>
      <a href="https://github.com/jonbellah/frontendconfs/" className="btn--primary">&#x2b; Add Conference</a>
    </div>
  </header>
);

export default Header;
