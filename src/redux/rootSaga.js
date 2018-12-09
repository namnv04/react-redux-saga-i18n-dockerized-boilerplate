import { all, fork } from 'redux-saga/effects';
import appSagas from '../containers/App/sagas';

export default function* rootSaga() {
  yield all([
    ...appSagas
  ].map(fork));
}
