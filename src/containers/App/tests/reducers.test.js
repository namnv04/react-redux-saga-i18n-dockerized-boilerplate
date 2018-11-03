import appReducer from '../reducers';
import at from '../action-types';

describe('reducers', () => {
  it('change username start', () => {
    const mockState = {};
    const mockAction = {
      type: at.CHANGE_USERNAME_START
    };
    expect(appReducer(mockState, mockAction).changeUsernameStart).toBe(true);
  });
  it('change username', () => {
    const mockState = {};
    const mockAction = {
      type: at.CHANGE_USERNAME,
      payload: 'something'
    };
    expect(appReducer(mockState, mockAction).username).toEqual('something');
  });
  it('change username done', () => {
    const mockState = {};
    const mockAction = {
      type: at.CHANGE_USERNAME_DONE
    };
    expect(appReducer(mockState, mockAction).changeUsernameStart).toBe(false);
    expect(appReducer(mockState, mockAction).changeUsernameDone).toBe(true);
  });
  it('with undefined action', () => {
    const mockState = undefined;
    const mockAction = {};
    expect(appReducer(mockState, mockAction)).toEqual({});
  });
});
