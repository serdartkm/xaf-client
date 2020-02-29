import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch'
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './library/app/App';
//import metaData from './visa/objectsMeta'


ReactDOM.render(<App defaultObjectName='employee' />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
