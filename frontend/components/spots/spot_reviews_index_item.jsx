import React from 'react';
import SpotReviews from './spot_reviews';

const SpotReviewsIndexItem = (state) => {
    return (
      <div className="spot-reviews-item">
        <ul>
            <li className="review-body">{state.review.body}</li>
        </ul>
      </div>
    );
  }

  export default SpotReviewsIndexItem;
