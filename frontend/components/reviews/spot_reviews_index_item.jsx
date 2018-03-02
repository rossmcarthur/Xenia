import React from 'react';

const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const SpotReviewsIndexItem = ({ review }) => {
  const date = new Date(review.created_at)
    return (
      <div>
        <ul className="review-item">
          <div className="review-header">
              <img className="review-image" src={review.author.image_url}/>
              <div className="review-name-date">
                <li className="review-author">{review.author.first_name}</li>
                <li className="review-date">{MONTH[date.getMonth()] + " " + date.getFullYear()}</li>
              </div>
            </div>
            <li className="review-body">{review.body}</li>
        </ul>
      </div>
    );
  };

  export default SpotReviewsIndexItem;
