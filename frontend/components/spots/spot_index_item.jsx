import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import SpotIndex from './spot_index'


const SpotIndexItem = ({ spot }) => {

    return (
      <div className="spot-index-item">
        <ul>
          <img className="spot-image" src={spot.image_url}/>
          <li className="spot-type">{spot.spot_type}</li>
          <li className="spot-title">{spot.title}</li>
          <li className="spot-price">From ${spot.price} per night</li>

        </ul>
      </div>
    );
  }


export default SpotIndexItem;
