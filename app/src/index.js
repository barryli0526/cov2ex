import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import reducer from './Reducer';
import routes from './Routes';



import './index.css';

const customHistory = createBrowserHistory();

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={customHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);