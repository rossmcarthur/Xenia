import React from 'react';
import { connect } from 'react-redux';
import { deleteReview, updateReview } from '../../actions/review_actions';

class SpotReviewsIndexItem extends React.Component {
  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const review = this.props.review;
    const currentUser = this.props.currentUser;
    const date = new Date(review.created_at);
    if (review.author.id === currentUser.id){
      return (
        <div>
          <ul className="review-item">
            <div className="review-header">
                <img className="review-image" src={review.author.image_url}/>
                <div className="review-name-date">
                  <li className="review-author">{review.author.first_name}</li>
                  <li className="review-date">{months[date.getMonth()] + " " + date.getFullYear()}</li>
                </div>
              </div>
              <li className="review-body">{review.body}</li>
              <button>Edit</button>
              <button onClick={() => this.props.deleteReview(review.id)}>Delete</button>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul className="review-item">
            <div className="review-header">
                <img className="review-image" src={review.author.image_url}/>
                <div className="review-name-date">
                  <li className="review-author">{review.author.first_name}</li>
                  <li className="review-date">{months[date.getMonth()] + " " + date.getFullYear()}</li>
                </div>
              </div>
              <li className="review-body">{review.body}</li>
          </ul>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: id => dispatch(deleteReview(id)),
    updateReview: review => dispatch(updateReview(review))
  };
};

export default connect(null, mapDispatchToProps)(SpotReviewsIndexItem);
