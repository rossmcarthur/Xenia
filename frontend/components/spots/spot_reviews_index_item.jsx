import React from 'react';

const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const SpotReviewsIndexItem = ({ review }) => {
  const date = new Date(review.created_at)
  debugger
    return (
      <div className="spot-reviews-item">
        <ul>
            <img className="review-image" src={review.author.image_url}/>
            <li className="review-author">{review.author.first_name}</li>
            <li className="review-date">{MONTH[date.getMonth()] + " " + date.getFullYear()}</li>
            <li className="review-body">{review.body}</li>

        </ul>
      </div>
    );
  };

  export default SpotReviewsIndexItem;
