import { RECEIVE_MAP_LOCATION } from '../actions/search_actions';
import merge from 'lodash/merge';

const initialState = {
   location: { lat: 40.7514, lng: -73.989 }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_MAP_LOCATION:
    return merge({}, state, action.location);
    default:
    return state;
  }
};
