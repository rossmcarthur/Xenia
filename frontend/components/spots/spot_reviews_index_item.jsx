import React from 'react';
import SpotReviews from './spot_reviews';

const SpotReviewsIndexItem = ({ spot, review }) => {
debugger
// add date to review

    return (
      <div className="spot-reviews-item">
        <ul>
            <li className="review-body">{review.body}</li>
        </ul>
      </div>
    );
  }

  export default SpotReviewsIndexItem;
