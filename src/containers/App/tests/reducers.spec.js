import reducers, { initialState } from '../reducers';
import { types } from '../actions';

describe('reducers', () => {
  it('REQUEST_DOG', () => {
    const mockAction = {
      type: types.REQUEST_DOG,
      dog: 'a dog'
    };
    expect(reducers(undefined, mockAction)).toEqual({
      dog: 'a dog'
    });
  });
  it('REQUEST_DOG_SUCCESS', () => {
    const mockAction = {
      type: types.REQUEST_DOG_SUCCESS,
      dog: 'a dog'
    };
    expect(reducers(undefined, mockAction)).toEqual({
      dog: 'a dog'
    });
  });
  it('REQUEST_DOG_ERROR', () => {
    const mockAction = {
      type: types.REQUEST_DOG_ERROR,
      error: new Error('an error')
    };
    expect(reducers(undefined, mockAction)).toEqual({
      error: new Error('an error')
    });
  });
  it('default', () => {
    const mockAction = {
      type: 'no exists action type'
    };
    expect(reducers(undefined, mockAction)).toEqual(initialState);
  });
});
