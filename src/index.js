import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory as createHistory} from 'history';
import {Router} from 'react-router-dom'
import configStore from './config/config-store';
import {Provider} from 'react-redux'
ReactDOM.render(
        <Provider store={configStore()}>
            <Router history={createHistory()}>
                <App />
            </Router>
        </Provider>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
