import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// step 1 add these imports
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const initialState = {};
const { store } = configureStore(initialState);

ReactDOM.render(
    // step 2 wrap your app in the Provider here
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
