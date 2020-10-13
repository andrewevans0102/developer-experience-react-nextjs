import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const middleware = [thunk];
const enhancers = [];

// create enhancers to include middleware
// thunk allows you to dispatch functions between the actions
const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers
);

// create the store and return it to the application onload
// note that here we are including our reducers to setup our store and interactions across the application
export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, composedEnhancers);

    return { store };
}
