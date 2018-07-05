import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    user: payload,
    reviews: payload.reviews
  };
};

export const fetchUser = user => dispatch => {
  return APIUtil.fetchUser(user).then(user => {
    return dispatch(receiveUser(user));
  });
};
