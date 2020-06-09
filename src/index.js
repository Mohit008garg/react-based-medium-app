import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { getStore } from './store';
import createSagaMiddleware from 'redux-saga';
import IndexSagas from './shared/index-sagas';


const sagaMiddleware = createSagaMiddleware();

export const store = getStore(sagaMiddleware);

sagaMiddleware.run(IndexSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

