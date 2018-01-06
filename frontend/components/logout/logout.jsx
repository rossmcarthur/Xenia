import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';
import SearchContainer from '../search/search_container';



class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

sessionLinks() {
  return (
    <nav className="login-signup">
      <button onClick={this.props.signupModal} className="signup-link">
        <span className="button-border">Sign Up</span>
      </button>
        &nbsp;&nbsp;
      <button onClick={this.props.loginModal} className="login-link">
        <span className="button-border">Log In</span>
      </button>
    </nav>
)};

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <header className="nav-header">
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
          </header>
          <SearchContainer />
        </div>
      );
    } else {
      return this.sessionLinks();
    }
  }
}

export default Logout;
