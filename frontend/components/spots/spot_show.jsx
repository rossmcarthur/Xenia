import React from 'react';
import ReactStars from 'react-stars';
import BookingFormContainer from '../bookings/booking_form_container';
import NavbarContainer from '../navbar/navbar_container';
import SpotReviewIndexItem from '../reviews/spot_reviews_index_item';
import SpotReviewsContainer from '../reviews/spot_reviews_container';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderChild: false,
      spot: this.props.spot,
    };

    this.showReviewRender = this.showReviewRender.bind(this);
    this.hideReviewRender = this.hideReviewRender.bind(this);
  }

  componentWillMount() {
    this.props.fetchSpot(this.props.spotId).then((res) => {
      this.setState({ spot: res.spot });
    });
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.spotId);
    this.props.fetchBookings(this.props.spotId);
  }

  showReviewRender() {
    this.setState({ renderChild: true });
  }

  hideReviewRender() {
    this.setState({ renderChild: false });
  }

  getAmenityIcon(amenity){
    switch (amenity.amenity_type) {
      case "Kitchen":
        return <i class="fas fa-utensils"></i>;
      case "Wifi":
        return <i class="fa fa-wifi" aria-hidden="true"></i>;
      case "Air Conditioning":
        return <i class="fa fa-snowflake-o" aria-hidden="true"></i>;
      case "Family/Kid Friendly":
        return <i class="fa fa-child" aria-hidden="true"></i>;
      case "Cable TV":
        return <i class="fa fa-television" aria-hidden="true"></i>;
      default:
        return null;
    }
  }

  renderGuests(guests) {
    if (guests === 1) {
      return (
        <div>
          <li className="spot-show-guests"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;{guests} guest</li>
        </div>
      );
    } else {
      return (
        <div>
          <li className="spot-show-guests"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;{guests} guests</li>
        </div>
      );
    }
  }

  renderBedrooms(bedrooms) {
    if (bedrooms === 1) {
      return (
        <li className="spot-show-bedrooms"><i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;{bedrooms} bedroom</li>
      );
    } else {
      return (
        <li className="spot-show-bedrooms"><i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;{bedrooms} bedrooms</li>
      );
    }
  }

  renderBeds(beds) {
    if (beds === 1) {
      return (
        <li className="spot-show-beds"><i class="fa fa-bed" aria-hidden="true"></i>&nbsp;&nbsp;{beds} bed</li>
      );
    } else {
      return (
        <li className="spot-show-beds"><i class="fa fa-bed" aria-hidden="true"></i>&nbsp;&nbsp;{beds} beds</li>
      );
    }
  }

  renderBathrooms(bathrooms) {
    if (bathrooms === 1) {
      return (
        <li className="spot-show-bathrooms"><i class="fa fa-bath" aria-hidden="true"></i>&nbsp;&nbsp;{bathrooms} bathroom</li>
      );
    } else {
      return (
        <li className="spot-show-bathrooms"><i class="fa fa-bath" aria-hidden="true"></i>&nbsp;&nbsp;{bathrooms} bathrooms</li>
      );
    }
  }

  renderAmenities() {
    const listItems = this.props.spot.amenities.map((amenity, i) => {
      return (
        <div className="list-icons">
          { this.getAmenityIcon(amenity) }
          <li className="spot-amenity" key={i}>{amenity.amenity_type}</li>
        </div>
        );
    });
    return (
      <ul className="spot-amenities-list">
        <p className="amenities-title">Amenities</p>
        { listItems }
      </ul>
    );
  }

  render() {
    let reviews;
    const spotId = parseInt(this.props.spotId);
    if (Object.keys(this.props.reviews).length > 0) {
      reviews = Object.values(this.props.reviews).map(review => {
        if (review.spot.id === spotId) {
          return (
            <SpotReviewIndexItem
              key={review.id}
              review={review}
              spot={this.props.spot}
              currentUser={this.props.currentUser}
              />
          );
        }
      });
    }
    if (this.state.spot) {
      return (
        <div className="spot-show-container">
          <NavbarContainer />
          <img className="spot-show-image" src={this.props.spot.image_url}/>
          <div className='booking-format'>
            <div className='middle'>
              <li className="spot-show-title"> {this.props.spot.title}</li>
              <li className="spot-show-spot_type">{this.props.spot.spot_type}</li>
                <ul className="spot-show-accommodations">
                  { this.renderGuests(this.props.spot.guests) }
                  { this.renderBedrooms(this.props.spot.bedrooms) }
                  { this.renderBeds(this.props.spot.beds) }
                  { this.renderBathrooms(this.props.spot.bathrooms) }
                </ul>
              <li className="spot-show-body"> {this.props.spot.body} </li>
              {this.renderAmenities()}
              <SpotReviewsContainer />
              <div className="review-list">
                {reviews}
              </div>
            </div>
              <BookingFormContainer renderReview={() => this.showReviewRender()}/>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

// {this.state.renderChild ? <SpotReviewsContainer render={this.state.renderChild} /> : null}



export default SpotShow;
