import { actions, types } from '../actions';

describe('actions', () => {
  describe('requestDog', () => {
    it('works', () => {
      const id = 1;
      expect(actions.requestDog(id)).toEqual({ type: types.REQUEST_DOG, id });
    });
  });
  describe('requestDogSuccess', () => {
    it('works', () => {
      const dog = 1;
      expect(actions.requestDogSuccess(dog)).toEqual({ type: types.REQUEST_DOG_SUCCESS, dog });
    });
  });
  describe('requestDogError', () => {
    it('works', () => {
      const error = 1;
      expect(actions.requestDogError(error)).toEqual({ type: types.REQUEST_DOG_ERROR, error });
    });
  });
});
