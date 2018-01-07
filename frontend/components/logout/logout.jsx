import React from 'react';
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
        <div className="spot-index">
          <header className="nav-header">
            <button className="logout-button" onClick={this.props.logout}>Log Out</button>
            <button className="host-button">Become a host</button>
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
