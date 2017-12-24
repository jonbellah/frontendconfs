import React from 'react';

const Footer = () => (
  <footer id="colophon" className="p:4 bg-darker-gray">
    <div className="container d:f j-c:s-b a-i:c color-mid-gray">
      <span>View on <a href="https://github.com/jonbellah/frontendconfs/">GitHub</a></span>
      <div className="d:f a-i:c">
        <img src="https://s.gravatar.com/avatar/9c152b1584187e23aa5d9b1dc2f697b7?s=30" alt="Jon Bellah" className="round m-r:.5" />
        <a href="https://jonbellah.com" className="color-mid-gray d:f a-i:c">Jon Bellah</a>
      </div>
    </div>
  </footer>
);

export default Footer;
