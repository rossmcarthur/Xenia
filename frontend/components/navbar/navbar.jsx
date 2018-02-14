import React from 'react';
import SearchBarContainer from '../search/search_bar_container';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

class Navbar extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return (
      <div  className="nav-header">
        <Link to="/" className="nav-header-link">
          <img className="nav-header-icon" src={window.staticImages.XeniaLogo}/>
        </Link>
          <div className="search-container">
            <SearchBarContainer />
          </div>
          <div className="nav-links">
              <img className="nav-user-image" src={this.props.currentUser.image_url}/>
              <Link to="/">
                <button className="logout-button" onClick={this.props.logout}>Log Out</button>
              </Link>
              <button className="host-button">Become a host</button>
          </div>
      </div>
      );
    } else {
      return (
        <div  className="nav-header">
          <Link to="/" className="nav-header-link">
            <img className="nav-header-icon" src={window.staticImages.XeniaLogo}/>
          </Link>
            <div className="search-container">
              <SearchBarContainer />
            </div>
            <button onClick={this.props.loginModal} className="nav-login-link">
              <span className="button-border">Log In</span>
            </button>
          <button onClick={this.props.signupModal} className="nav-signup-link">
            <span className="button-border">Sign Up</span>
          </button>
          <SessionFormContainer />
        </div>

      );
    }

    }
}

export default Navbar;
