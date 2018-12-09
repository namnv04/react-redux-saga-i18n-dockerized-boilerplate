/*
 * Reducers and Selectors
 *
 */

import { types } from './actions';

export const initialState = {
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
  case types.REQUEST_DOG:
    return { ...state, dog: action.dog };
  case types.REQUEST_DOG_SUCCESS:
    return { ...state, dog: action.dog };
  case types.REQUEST_DOG_ERROR:
    return { ...state, error: action.error };
  default:
    return state;
  }
};

// Selectors
export const selectors = {
  getDog: state => state.app.dog
};
