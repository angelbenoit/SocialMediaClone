import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import postListReducer from './postListReducer';
import postItemReducer from './postItemReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    postList: postListReducer,
    postInfo: postItemReducer,
})