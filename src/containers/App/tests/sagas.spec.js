import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { types, actions as ack } from '../actions';
import * as sagas from '../sagas';

jest.mock('axios');

describe('sagas', () => {
  describe('requestDog', () => {
    axios.mockImplementation(() => true);
    it('works', () => {
      sagas.requestDog();
      expect(axios).toHaveBeenCalled();
    });
  });
  describe('requestDogSagaWatcher', () => {
    it('works', () => {
      const next = sagas.requestDogSagaWatcher().next();
      expect(next.value).toEqual(takeLatest(types.REQUEST_DOG, sagas.requestDogSaga));
      expect(next.done).toEqual(false);
    });
  });
  describe('requestDogSaga', () => {
    const mockAction = { id: 1 };
    const generator = sagas.requestDogSaga(mockAction);
    it('works', () => {
      const next = generator.next();
      expect(next.value).toEqual(call(sagas.requestDog, mockAction.id));
      expect(next.done).toEqual(false);

      const mockResp = {
        data: {
          message: 'some value'
        }
      };
      const next2 = generator.next(mockResp);
      expect(next2.value).toEqual(put(ack.requestDogSuccess(mockResp.data.message)));
      expect(next2.done).toBeFalsy();
    });
    it('errors out', () => {
      const mockError = { error: new Error() };
      const next = generator.throw(mockError);
      expect(next.value).toEqual(put(ack.requestDogError(mockError)));
      expect(next.done).toBeFalsy();
    });
  });
});
