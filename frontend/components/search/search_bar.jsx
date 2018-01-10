import React from 'react';

class SearchBar extends React.Component {



  render() {
    return (
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Anywhere"/>
      </div>
    );
  }
}

export default SearchBar;
