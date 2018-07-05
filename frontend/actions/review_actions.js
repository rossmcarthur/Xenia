import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};

export const removeReview = review => {
  return {
    type: REMOVE_REVIEW,
    review
  };
};

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review,
    spotId: review.spot.id
  };
};

export const fetchReviews = spotId => dispatch => {
  return APIUtil.fetchReviews(spotId).then(reviews => {
    return dispatch(receiveReviews(reviews));
  });
};

export const createReview = review => dispatch => {
  return APIUtil.createReview(review).then(review => {
    return dispatch(receiveReview(review));
  });
};

export const deleteReview = id => dispatch => {
  return APIUtil.deleteReview(id).then(review => {
    return dispatch(removeReview(review));
  });
};

export const updateReview = review => dispath => {
  return APIUtil.updateReview(review).then(review => {
    return dispatch(receiveReview(review));
  });
};
