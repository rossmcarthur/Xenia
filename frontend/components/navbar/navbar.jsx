import React from 'react';
import SearchBar from '../search/search_bar';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
    <div  className="nav-header">
      <Link to="/" className="nav-header-link">
        <img className="nav-header-icon" src={window.staticImages.XeniaLogo}/>
        <SearchBar />
        <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        <button className="host-button">Become a host</button>
      </Link>
    </div>
    );
  }
}

export default Navbar;
