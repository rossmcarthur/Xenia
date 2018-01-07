import React from 'react';
import SpotMap from '../spot_map/spot_map';
import SpotIndex from '../spots/spot_index';
import SearchBar from './search_bar';

class Search extends React.Component {
  render() {
    return (
        <div>
          <SearchBar />
          <SpotMap spots={this.props.spots} updateBounds={this.props.updateBounds} />
          <SpotIndex spots={this.props.spots} />
        </div>
    );
  }
}


export default Search;
