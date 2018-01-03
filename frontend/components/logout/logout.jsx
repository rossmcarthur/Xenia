import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link className="login-link" to="/login">Log In</Link>
    &nbsp;&nbsp;
    <Link className="signup-link" to="/signup">Sign Up</Link>
  </nav>
);

const Logout = props => {
  debugger
  if (props.currentUser) {
    return (
      <div>
        <h2 className="header-name">Hi, {props.currentUser.email}!</h2>
        <button className="header-button" onClick={props.logout}>Log Out</button>
      </div>
    );
  } else {
    return sessionLinks();
  }
}

export default Logout;
