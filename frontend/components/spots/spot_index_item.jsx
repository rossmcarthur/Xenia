import React from 'react';
import { withRouter } from 'react-router-dom';
import SpotIndex from './spot_index'


const SpotIndexItem = ({ spot }) => {

    return (
      <div className="spot-index-item">
        <ul>
          <li>{spot.spot_type}</li>
          <li>{spot.title}</li>
          <li>From ${spot.price} per night</li>
        </ul>
      </div>
    );
  }


export default SpotIndexItem;
