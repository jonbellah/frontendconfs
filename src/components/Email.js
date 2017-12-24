import React, { Component } from 'react';

class Email extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div id="mc_embed_signup" className="bg-dark-gray p:8">
        <form action="https://jonbellah.us4.list-manage.com/subscribe/post?u=cd903cc3fde462d23ad126e77&amp;id=bbc672add9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div className="container">
            <div className="w:12of12 t-a:c">
              <h2 className="color-white f:5 f-w:700">Want to stay in the loop?</h2>
              <p className="color-white-75 d:i-b f:2 m-b:4 w:6of12">Get updates about new and upcoming conferences, open speaker calls, and early bird sales. Right in your inbox. No spam. Ever.</p>
            </div>
            <div className="mc-field-group d:f j-c:c a-i:f-s pos:r m-b:1">
              <span className="input__wrap w:3of12 pos:r m-r:.5">
                <input type="email" value={this.state.email} onChange={this.handleInput} name="EMAIL" className="email input__field w:full p:1" placeholder="Email Address&hellip;" id="mce-EMAIL" />
                <label className="screen-reader-text" htmlFor="mce-EMAIL">Email Address</label>
              </span>
              <div aria-hidden="true" className="d:n">
                <input type="text" name="b_cd903cc3fde462d23ad126e77_bbc672add9" tabIndex="-1" value="" />
              </div>
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn--submit color-white" />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }} />
              <div className="response" id="mce-success-response" style={{ display: 'none' }} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Email;
