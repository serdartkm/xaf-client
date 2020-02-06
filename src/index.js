import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './library/redux/store';

const visaStore = store({
  employee: {
    firstName: { value: '', type: 'text', placeholder: 'Enter firstname' },
    lastName: { value: '', type: 'text', placeholder: 'Enter lastname' },
    birthDate: { value: '', type: 'date' },
    birthPlace: { value: '', type: 'text', placeholder: 'Enter place of birth' }
  }
});
ReactDOM.render(
  <Provider store={visaStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
