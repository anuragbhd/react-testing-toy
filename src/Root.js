import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import combinedReducer from './reducers';

const Root = (props) => (
  <Provider
    store={createStore(
      combinedReducer,
      {},
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    {props.children}
  </Provider>
);

export default Root;
