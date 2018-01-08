import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  render() {
    const spots = this.props.spots.map(spot => {
      return (
        <SpotIndexItem
        key={spot.id}
        spot={spot}
        />
      );
    });
    return (
      <div className="spot-list">
        { spots }
      </div>
    );
  }
}

export default SpotIndex;
