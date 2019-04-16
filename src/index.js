// React Elements
import React from 'react';
import ReactDOM from 'react-dom';

// Redux 
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Components
import reducer from './reducer';
import App from './App';

// CSS
import './index.css';

// *****************************************************************

// Store
const composeEnhancers = 
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({
            trace: true
        })
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer, enhancer);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);