import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = payload => {
  return {
    type: RECEIVE_REVIEW,
    review: payload.review,
  };
};

export const removeReview = payload => {
  return {
    type: REMOVE_REVIEW,
    review: payload.review,
  };
};

export const createReview = review => dispatch => {
  APIUtil.createReview(review).then(review => {
    dispatch(receiveReview(review));
  });
};

export const deleteReview = id => dispatch => {
  APIUtil.deleteReview(id).then(review => {
    dispatch(deleteReview(id));
  });
};
