import React from 'react';
import ReactStars from 'react-stars';
import SpotReviewsIndexItem from './spot_reviews_index_item';

class SpotReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.review.rating,
      spotId: this.props.spotId,
      body: this.props.review.body,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel(e) {
    this.setState({body: ''});
  }

  handleSubmit(e) {
    this.props.action(this.state);
  }

  render() {
    const reviews =
    <div>
      <div className='stars'>
        className='review-stars'
        count={5}
        value={this.state.rating}
        size={20}
        edit={true}
        half={true}
        color2={'#008489'}
      </div>
      <div className='review-create-cancel'>
        <button onCLick={this.handleSubmit}>Create</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    </div>;
  }


}

export default SpotReview;
