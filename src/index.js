// React Elements
import React from 'react';
import ReactDOM from 'react-dom';

// Redux 
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Components
import reducer from './reducer';

// CSS
import './index.css';

// *****************************************************************

// Store
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

// Main App
function App() {
    return (
        <div>
            Test
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);