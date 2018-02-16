import React from 'react';
import ReactStars from 'react-stars';
import SpotReviewsIndexItem from './spot_reviews_index_item';

class SpotReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      body: '',
      spot_id: this.props.spotId,
      author_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleCancel(e) {
    this.setState({ body: '' });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.action(this.state);
    e.stopPropagation();
  }

  handleRating(e) {
    this.setState({ rating: e });
  }

  render() {
    if(this.props.bookingIds.includes(this.props.spotId) && !this.props.reviewIds.includes(this.props.spotId)) {
    return (
      <div className="create-review-container">
        <form id='review-create-form' onSubmit={this.handleSubmit}>
          <ReactStars
            onClick={this.handleRating}
            className='stars'
            count={5}
            value={this.state.rating}
            size={20}
            edit={true}
            half={true}
            color2={'#008489'}
            />
          <label>Review:</label>
          <textarea
            className='review-body-input'
            type='textarea'
            value={this.state.body}
            onChange={this.update('body')}
            form='review-create-form'
            />
          <div className='review-create-cancel'>
            <button onClick={this.handleSubmit}>Create</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  } else {
    return null;
  }
  }

}

export default SpotReview;
