import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//  Setting up provider to allow app access to redux store
import { Provider } from 'react-redux';
//  Importing store that was set in App
import { store } from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
  // Wrapping Provider to give App access to store
  <Provider store={store}>
    <App />
  </Provider>
  , rootElement);
