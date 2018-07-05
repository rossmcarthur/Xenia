import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

export const receiveSpots = spots => {
  return {
    type: RECEIVE_SPOTS,
    spots
  };
};

export const receiveSpot = payload => {
  return {
    type: RECEIVE_SPOT,
    spot: payload
  };
};

export const removeSpot = id => {
  return {
    type: REMOVE_SPOT
  };
};

export const fetchSpots = (args) => dispatch => {
  return APIUtil.fetchSpots(args).then(spots => {
    return dispatch(receiveSpots(spots));
  });
};

export const fetchSpot = id => dispatch => {
  return APIUtil.fetchSpot(id).then(spot => {
    return dispatch(receiveSpot(spot));
  });
};

export const createSpot = spot => dispatch => {
  return APIUtil.createSpot(spot).then(spot => {
    return dispatch(receiveSpot(spot));
    });
  };


export const updateSpot = spot => dispatch => {
  return APIUtil.updateSpot(spot).then(spot => {
    return dispatch(receiveSpot(spot));
  });
};

export const deleteSpot = id => dispatch => {
  return APIUtil.removeSpot(id).then(spot => {
    return dispatch(removeSpot(id));
  });
};
