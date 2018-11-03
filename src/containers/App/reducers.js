import at from './action-types';

const initialState = {};

export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
  case at.CHANGE_USERNAME_START:
    newState = { ...state, changeUsernameStart: true };
    break;
  case at.CHANGE_USERNAME:
    newState = {
      ...state,
      username: action.payload
    };
    break;
  case at.CHANGE_USERNAME_DONE:
    newState = { ...state, changeUsernameStart: false, changeUsernameDone: true };
    break;
  default:
    newState = state;
  }
  return newState;
};