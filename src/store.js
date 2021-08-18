import { applyMiddleware, createStore, compose } from 'redux'; // compose is needed to use redux devtools in chrome
import rootReducer from './reducers'; // no need to specify the js file as it is named index.js
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
