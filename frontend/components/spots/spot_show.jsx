import React from 'react';
import ReactStars from 'react-stars';
import BookingFormContainer from '../bookings/booking_form_container';
import NavbarContainer from '../navbar/navbar_container';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.spotId);
  }

  renderAmenities() {
    return (
      <ul className="spot-amenities-list">
        <p className="amenities-title">Amenities</p>
        {this.props.spot.amenities.map( (amenity, i) => (
          <li className="spot-amenity" key={i}>
             { amenity.amenity_type }
          </li>
        ))}
      </ul>
    );
  }

  render() {

    if (this.props.spot) {
      return (
        <div className="spot-show-container">
          <NavbarContainer />
          <img className="spot-show-image" src={this.props.spot.image_url}/>
          <div className="spot-show-grid">
            <li className="spot-show-title"> {this.props.spot.title}</li>
            <li className="spot-show-spot_type">{this.props.spot.spot_type}</li>
            <li className="spot-show-body"> {this.props.spot.body} </li>
            {this.renderAmenities()}
            <BookingFormContainer />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SpotShow;
