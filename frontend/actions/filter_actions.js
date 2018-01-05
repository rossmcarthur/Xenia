import { fetchSpots } from './spot_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const changeBounds = (bounds, value) => {
  return {
    type: UPDATE_BOUNDS,
    bounds,
    value
  };
};

export const updateBounds = (bounds, value) => (dispatch, getState) => {
  dispatch(changeBounds(bounds, value));
  return fetchSpots(getState().ui.filters)(dispatch);
};
