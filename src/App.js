import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { customerReducer } from './components/reducers/customerReducer';
import Customer from './components/customer/Customer';

import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import { Header } from './shared/header';
import { ADD_CUSTOMER } from './components/actions/type';
//import store from './components/Store';
 
//const initialState = 'Initial State';

//Actions


const customerReducer = (state = [], action) => {
    switch(action.type)
    {
        case ADD_CUSTOMER:
        {
            return action.payload;
        }
        default:
            return state;
    }
};

const reducers = combineReducers({
    customers: customerReducer
}); 

const store = createStore(
    reducers, 
    composeWithDevTools(
        applyMiddleware()
        //Other enhancer
    )
    
    );

    //console.log(store.getState());
    //store.dispatch(action);
    //console.log(store.getState());
class App extends Component
{
    
    render(){
        return (
            <>
            <Provider store={store}>
                <Router>
                    <Header/>
                    <Customer/>
                </Router>
            </Provider>
            </>
            )
        
    }
}

export default App;