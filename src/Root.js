import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import combinedReducer from './reducers';

const Root = ({ children, initialState = {} }) => (
  <Provider
    store={createStore(
      combinedReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    {children}
  </Provider>
);

export default Root;
