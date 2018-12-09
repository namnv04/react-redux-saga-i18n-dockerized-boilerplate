import { all, fork } from 'redux-saga/effects';
import rootSaga from '../rootSaga';
import appSagas from '../../containers/App/sagas';

describe('rootSaga', () => {
  it('works', () => {
    const next = rootSaga().next();
    expect(next.value).toEqual(all([
      ...appSagas
    ].map(fork)));
  });
});
