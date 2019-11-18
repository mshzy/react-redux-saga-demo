import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'

const reducer = (state = { times: 0 }, action) => {
  switch (action.type) {
    case 'addOne':
      return { times: state.times + action.payload }
    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider
    store={store}
  >
    <App></App>
  </Provider>,
  document.querySelector('#root'));



