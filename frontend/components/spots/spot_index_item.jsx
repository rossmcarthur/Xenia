import React from 'react';
import { withRouter } from 'react-router-dom';
import SpotIndex from './spot_index'


class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span className="index-item-title">Title: </span>
        <span>{this.props.spot.title}</span>
        <br/>
        <span className="index-item-body">Description: </span>
        <span>{this.props.spot.body}</span>
      </div>
    );
  }
}

export default SpotIndexItem;
