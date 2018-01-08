import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
=======
import MarkerManager from '../../util/marker_manager';
>>>>>>> spot-function

class SpotMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
<<<<<<< HEAD
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
=======
      center: { lat: 40.7514, lng: -73.989 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    window.map = this.map;
    this.MarkerManager = new MarkerManager(this.map);
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
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
>>>>>>> spot-function
  }

  render() {
    return (
<<<<<<< HEAD
      <div ref={ map => this.mapNode = map}></div>
    );
  }

=======
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    );
  }
>>>>>>> spot-function
}

export default SpotMap;
