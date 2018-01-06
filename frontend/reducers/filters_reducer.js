import merge from 'lodash/merge';

import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {}
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_BOUNDS) {
    const newBounds = {
      [action.bounds]: action.value
    };
    return merge({}, state, newBounds);
  } else {
    return state;
  }
};

export default filtersReducer;
