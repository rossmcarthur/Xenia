import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

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
      <div>
        <h1>Spots: </h1>
        { spots }
      </div>
    );
  }
}


export default SpotIndex;
