import React from 'react';
import SpotMap from '../spot_map/spot_map';
import SpotIndex from '../spots/spot_index';

class Search extends React.Component {
  render() {
    return (
          <div className="spots-main-grid">
            <div className="spot-index">
              <SpotIndex spots={this.props.spots} />
            </div>
            <div className="spot-map">
              <SpotMap spots={this.props.spots} updateBounds={this.props.updateBounds} />
            </div>
          </div>
    );
  }
}


export default Search;
