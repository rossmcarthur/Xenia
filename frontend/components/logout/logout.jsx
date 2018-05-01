import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import SearchContainer from '../search/search_container';
import NavbarContainer from '../navbar/navbar_container';
import SearchBarContainer from '../search/search_bar_container';
import { Link } from 'react-router-dom';
import Dropdown from '../navbar/dropdown';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

homeSearch() {
  return (
    <div className="home-search-box">
      <div className="home-text">
        <h2 className="home-title">Xenia</h2>
        <p className="home-body">Book unique homes and experiences all over the world.</p>
      </div>
      <div>
        <SearchBarContainer />
      </div>
    </div>
  );
}

logoutLinks() {
  return (
    <div>
      <div className="nav-head">
        <nav className="host-logout">
          <Link className='booking-page-link' to='/bookings'>
            <span className='button-border'>Trips</span>
          </Link>
          <Link className='spot-create-link' to='/spots/create'>
            <span className="button-border">Become a host</span>
          </Link>
            &nbsp;&nbsp;
          <Dropdown />
        </nav>
      </div>
        {this.homeSearch()}
    </div>
  );
}

loginLinks() {
  return (
    <div>
      <div className="nav-head">
        <nav className="login-signup">
          <button onClick={this.props.signupModal} className="signup-link">
            <span className="button-border">Sign Up</span>
          </button>
            &nbsp;&nbsp;
          <button onClick={this.props.loginModal} className="login-link">
            <span className="button-border">Log In</span>
          </button>
        </nav>
      </div>
        {this.homeSearch()}
    </div>
  );
}

  render() {
    if (this.props.currentUser) {
      return this.logoutLinks();
    } else {
      return this.loginLinks();
    }
  }
}

export default Logout;
