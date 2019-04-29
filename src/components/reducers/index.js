import { combineReducers } from 'redux';

import customerReducers from './customerReducer';

export default combineReducers({
    posts: customerReducers
});