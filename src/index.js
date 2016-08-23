import 'babel-polyfill';
import React from 'react';
import  { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import './styles/styles.css'; // We can get Webpack to import css too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('app')
  </Provider>
);
