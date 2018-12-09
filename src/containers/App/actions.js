/*
 * Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

export const types = {
  REQUEST_DOG: 'App/REQUEST_DOG',
  REQUEST_DOG_SUCCESS: 'App/REQUEST_DOG_SUCCESS',
  REQUEST_DOG_ERROR: 'App/REQUEST_DOG_ERROR',
};

export const initialState = {
  dog: {}
};

export const actions = {
  requestDog: (id) => ({ type: types.REQUEST_DOG, id }),
  requestDogSuccess: (dog) => ({ type: types.REQUEST_DOG_SUCCESS, dog }),
  requestDogError: (error) => ({ type: types.REQUEST_DOG_ERROR, error }),
};
