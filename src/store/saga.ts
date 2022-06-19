import { all } from 'redux-saga/effects';

import messagesSaga from './messages/saga';

export default function* rootSaga() {
  yield all([...messagesSaga]);
}
