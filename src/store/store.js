import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/rootsaga'
import reducer from '../reducer/reducer'

const preloadedState = {
  times:5
}
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, preloadedState, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)