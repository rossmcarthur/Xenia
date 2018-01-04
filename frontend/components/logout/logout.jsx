import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';



class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

sessionLinks() {
  return (
  <nav className="login-signup">
    <button onClick={this.props.loginModal} className="login-link">Log In</button>
    &nbsp;&nbsp;
    <button onClick={this.props.signupModal} className="signup-link">Sign Up</button>
  </nav>
)};

  render() {
  if (this.props.currentUser) {
    return (
      <div>
        <h2 className="header-name">Hi, {this.props.currentUser.email}!</h2>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
      </div>
    );
  } else {
    return this.sessionLinks();
  }
}
}

export default Logout;
