import { takeEvery, put } from 'redux-saga/effects';

function* addTaskSaga(action) {
  yield put({ type: 'ADD_TASK', payload: action.payload });
}

function* deleteTaskSaga(action) {
  yield put({ type: 'DELETE_TASK', payload: action.payload });
}

function* watchTasks() {
  yield takeEvery('ADD_TASK_REQUEST', addTaskSaga);
  yield takeEvery('DELETE_TASK_REQUEST', deleteTaskSaga);
}

export default watchTasks;