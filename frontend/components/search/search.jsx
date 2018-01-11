import React from 'react';
import SpotMapContainer from '../spot_map/spot_map_container';
import SpotIndexContainer from '../spots/spot_index_container';

class Search extends React.Component {
  render() {
    return (
          <div className="spots-main-grid">
            <div className="spot-index">
              <SpotIndexContainer />
            </div>
            <div className="spot-map">
              <SpotMapContainer />
            </div>
          </div>
    );
  }
}

export default Search;
