import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from "react-redux";

const reducer = (state = { times: 0 }, action) => {
  switch (action.type) {
    case 'add':
      return { times: state.times + action.payload }
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider
    store={store}
  >
    <App></App>
  </Provider>,
  document.querySelector('#root'));


serviceWorker.unregister();

