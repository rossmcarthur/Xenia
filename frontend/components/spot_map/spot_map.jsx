import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7514, lng: -73.989 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentWillReceiveProps(newProps) {
    debugger
    if (newProps.focus) {
      this.map.setCenter(newProps.focus);
    }
    this.MarkerManager.updateMarkers(newProps.spots);
  }


  handleMarkerClick(spot) {
    this.props.history.push(`spots/${spot.id}`);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      northEast: { lat: north, lng: east },
      southWest: { lat: south, lng: west } };
      this.props.updateBounds('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
    this.map.addListener('center_changed', () => {
      const center = this.map.getCenter();
      this.props.receiveMapLocation(null);
    });
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map}></div>
    );
  }
}

export default withRouter(SpotMap);
