import React from 'react';
import map from '../spot_map/spot_map';
import spotIndex from '../spots/spot_index'

class Search extends React.Component {
  render() {
    return (
      <div>
        <SpotMap />
        <SpotIndex />
      </div>
    );
  }
}
