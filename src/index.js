import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'

const reducer = (states, action) => {
  const state = JSON.parse(JSON.stringify(states))  //不建议这样做，性能开销大
  switch (action.type) {
    case 'addOne':
      state.times += action.payload
      return state
    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, { times: 5 }, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider
    store={store}
  >
    <App ></App>
  </Provider>,
  document.querySelector('#root'));



