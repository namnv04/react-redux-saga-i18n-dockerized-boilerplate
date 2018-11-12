import * as actions from '../actions';
import at from '../action-types';

describe('actions', () => {
  describe('changeUsername', () => {
    it('works', () => {
      const mockDispatch = jest.fn();
      const mockPayload = 'something';
      actions.changeUsername(mockPayload)(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledTimes(3);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: at.CHANGE_USERNAME_START
      });
      expect(mockDispatch).toHaveBeenNthCalledWith(2, {
        type: at.CHANGE_USERNAME,
        payload: mockPayload
      });
      expect(mockDispatch).toHaveBeenNthCalledWith(3, {
        type: at.CHANGE_USERNAME_DONE
      });
    });
    it('works', () => {
      const mockDispatch = jest.fn();
      actions.changeUsername('')(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledTimes(0);
    });
  });
});
