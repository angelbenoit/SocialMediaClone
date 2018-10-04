import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import postListReducer from './postListReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    postList: postListReducer,
})