import { put, call, takeEvery } from 'redux-saga/effects';
import api from 'utils/api';

import { DELETE_MESSAGE, DeleteMessage } from './action';

function* deleteMessage(action: DeleteMessage) {
  try {
    yield call(api().delete, `/message/${action.id}`);
    yield put({ type: DELETE_MESSAGE, id: action.id });
  } catch (e: unknown) {
    yield put({ type: DELETE_MESSAGE, message: e });
  }
}

const messagesSagas = [takeEvery(DELETE_MESSAGE, deleteMessage)];

export default messagesSagas;
