import React from 'react';
import SpotMap from '../spot_map/spot_map';
import SpotIndex from '../spots/spot_index';

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    return (
        <div>
          <SpotMap spots={this.props.spots} updateBounds={this.props.updateBounds} />
          <SpotIndex spots={this.props.spots} />
        </div>
    );
  }
}


export default Search;
