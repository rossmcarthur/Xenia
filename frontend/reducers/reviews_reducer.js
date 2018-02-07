import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_SPOT } from '../actions/spot_actions';
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      delete newState[action.reviews];
      return newState;
    case RECEIVE_USER:
      return merge({}, state, action.reviews);
    case RECEIVE_SPOT:
      return merge({}, state, action.reviews);
    default:
      return state;
  }
};

export default reviewsReducer;
