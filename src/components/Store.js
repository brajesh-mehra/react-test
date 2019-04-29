import { createStore, applyMiddleware } from 'redux';

import thunk from 'react-thunk';
//import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

export const store = () => createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleWare)
    );

//export default store;