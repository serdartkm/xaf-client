import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './library/redux/store';
import Navigation from './library/Navigation';
import objectMeta from './visa/objectsMeta';
const visaStore = store(objectMeta);
ReactDOM.render(
  <Provider store={visaStore}>

    <Navigation objectMeta={objectMeta} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
