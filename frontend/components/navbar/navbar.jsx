import React from 'react';
import SearchBarContainer from '../search/search_bar_container';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
    <div  className="nav-header">
      <Link to="/" className="nav-header-link">
        <img className="nav-header-icon" src={window.staticImages.XeniaLogo}/>
        <SearchBarContainer />
        <button className="logout-button" onClick={this.props.logout}>Log Out</button>
      </Link>
      <Link to="/spots/">
        <button className="host-button">Become a host</button>
      </Link>
    </div>
    );
  }
}

export default Navbar;
