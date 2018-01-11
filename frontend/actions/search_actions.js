export const RECEIVE_MAP_LOCATION = 'RECEIVE_MAP_LOCATION';

export const receiveMapLocation = (location) => {
  return ({
    type: RECEIVE_MAP_LOCATION,
    location
  });
};
