import React from 'react';
import SearchBar from '../search/search_bar';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
    <div>
      <Link to="/" className="header-link">
        <img className="homepage-icon-login" src={window.staticImages.XeniaLogo}/>
      </Link>
        <SearchBar />
        <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        <button className="host-button">Become a host</button>
    </div>
    );
  }
}

export default Navbar;
