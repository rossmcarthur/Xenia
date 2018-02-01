import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEW:
      return merge({}, state, action.review);
    case REMOVE_REVIEW:
      let newState = merge({}, state);
      delete newState[action.review];
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
