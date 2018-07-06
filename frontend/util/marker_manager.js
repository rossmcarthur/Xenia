class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  createMarkerFromSpot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id,
      price: spot.price,
      label: {
        text: "$"+spot.price
      },
      icon: {
        path: 'M-3,3a0.905778,0.905778,0,0,1,-1,-1v-4a1,1,0,0,1,1,-1h6a1,1,0,0,1,1,1v4a1,1,0,0,1,-1,1h-2l-0.9176470588235298,1.564705882352941l-1.015686274509804,-1.549019607843137Z',
        fillColor: "white",
        strokeColor: "gray",
        fillOpacity: 1,
        strokeWeight: 1,
        scale: 6
      },
      zIndex: spot.id
    });
    marker.addListener('click', () => this.handleClick(spot));
    this.markers[marker.spotId] = marker;
  }

  updateMarkers(spots) {
    const spotsObj = {};
    spots.forEach(spot => spotsObj[spot.id] = spot);

    spots.filter(spot => !this.markers[spot.id])
      .forEach(newSpot => this.createMarkerFromSpot(newSpot, this.handleClick));

    Object.keys(this.markers).filter(spotId => !spotsObj[spotId])
      .forEach((spotId) => this.removeMarker(this.markers[spotId]));
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }

}

export default MarkerManager;
