import React from 'react';
import { connect } from 'react-redux';
import { deleteReview, updateReview } from '../../actions/review_actions';
import SpotReviewsEditContainer from './spot_reviews_edit_container';

class SpotReviewsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }
  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const review = this.props.review;
    const currentUser = this.props.currentUser;
    const date = new Date(review.created_at);
    debugger
    if (this.state.edit) {
      return (
        <SpotReviewsEditContainer currentReview={review} />
      );
    } else if (review.author.id === currentUser.id){
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
              <button onClick={() => this.setState({ edit: true })}>Edit</button>
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
const mapStateToProps = state =>  {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: id => dispatch(deleteReview(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotReviewsIndexItem);
