import React from 'react';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
  center: { lat: 40.7514, lng: -73.989 },
  zoom: 13
  };

  this.map = new google.maps.Map(this.mapNode, mapOptions);
  this.MarkerManager = new MarkerManager(this.map);
  this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    );
  }
}

export default SpotMap;
