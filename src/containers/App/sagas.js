import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { types, actions as ack } from './actions';

export function requestDog(id) {
  return axios({
    method: 'get',
    url: `https://dog.ceo/api/breeds/image/random?id=${id}`
  });
}

export function* requestDogSaga(action) {
  try {
    const response = yield call(requestDog, action.id);
    const dog = response.data.message;
    yield put(ack.requestDogSuccess(dog));
  } catch (error) {
    yield put(ack.requestDogError(error));
  }
}

export function* requestDogSagaWatcher() {
  yield takeLatest(types.REQUEST_DOG, requestDogSaga);
}

export default [
  requestDogSagaWatcher
];
