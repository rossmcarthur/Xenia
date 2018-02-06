import React from 'react';
import SpotReviews from './spot_reviews';

const SpotReviewsIndexItem = ({ review }) => {

// add date to review

    return (
      <div className="spot-reviews-item">
        <ul>
            <img className="review-user-image" src={review.author.image_url}/>
            <li className="review-user-name">{review.author.first_name}</li>
            <li className="review-body">{review.body}</li>
        </ul>
      </div>
    );
  }

  export default SpotReviewsIndexItem;
