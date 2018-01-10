export const RECEIVE_MAP_LOCATION = 'RECEIVE_MAP_LOCATION';

const fetchMapLocation = location => {
  return {
    type: RECEIVE_MAP_LOCATION,
    location
  };
};

export default fetchMapLocation;
