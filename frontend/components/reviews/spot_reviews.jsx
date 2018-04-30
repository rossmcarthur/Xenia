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
      author_id: this.props.currentUser,
      render: this.props.render,
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
    e.preventDefault();
    this.props.createReview(this.state);
    this.setState({ render: false });
    e.stopPropagation();
  }

  handleRating(e) {
    this.setState({ rating: e });
  }

  render() {
    debugger
    if (this.props.currentUser && this.state.render &&
        (this.props.bookingIds.filter(id => id === this.props.spotId).length > this.props.reviewIds.filter(id => id === this.props.spotId).length)) {
          return (
            <div className="create-review-container">
              <form id='review-create-form' onSubmit={this.handleSubmit}>
                <ReactStars
                  onChange={this.handleRating}
                  className='stars'
                  count={5}
                  value={this.state.rating}
                  size={20}
                  edit={true}
                  half={false}
                  color2={'#008489'}
                  />
                <label className='review-label'>Leave a review:</label>
                <textarea
                  className='review-body-input'
                  type='textarea'
                  value={this.state.body}
                  onChange={this.update('body')}
                  form='review-create-form'
                  />
                <div className='review-create-cancel'>
                  <button className='review-create-button' onClick={this.handleSubmit}>Create</button>
                  <button className='review-cancel-button' onClick={this.handleCancel}>Cancel</button>
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
