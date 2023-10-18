
import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure, FETCH_DATA_REQUEST } from './action';
import axios from 'axios';

function* fetchData() {
  try {
    const response = yield call(axios.get, 'https://admin.naxa.com.np/api/services');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

export default function* rootSaga() {
  yield watchFetchData();
}