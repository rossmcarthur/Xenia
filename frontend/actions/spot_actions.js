import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';

export const receiveSpots = spots => {
  return {
    type: RECEIVE_SPOTS,
    spots
  };
};

export const receiveSpot = spot => {
  return {
    type: RECEIVE_SPOT,
    spot
  };
};

export const removeSpot = id => {
  return {
    type: REMOVE_SPOT
  };
};

export const fetchSpots = () => dispatch => {
  return APIUtil.fetchSpots().then(spots => {
    return dispatch(receiveSpots(spots));
  });
};

export const fetchSpot = spot => dispatch => {
  return APIUtil.fetchSpot(spot).then(spot => {
    return dispatch(receiveSpot(spot));
  });
};

export const deleteSpot = id => dispatch => {
  return APIUtil.removeSpot(id).then(spot => {
    return dispatch(removeSpot(id));
  });
};
