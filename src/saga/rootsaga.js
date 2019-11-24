import { all, call, put, takeEvery } from 'redux-saga/effects'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* addOne1sLater(action) {
  yield call(delay, 1000)
  yield put({ type: 'addOne', payload: action.payload })
}

export default function* watchAddOne1sLater() {
  yield takeEvery('preAddOne', addOne1sLater)
}

