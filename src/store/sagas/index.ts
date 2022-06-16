import { all } from 'redux-saga/effects';

import messagesSagas from './messages';

export default function* rootSaga() {
  yield all([...messagesSagas]);
}
