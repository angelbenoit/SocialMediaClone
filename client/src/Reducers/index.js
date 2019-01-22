import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import postListReducer from './postListReducer';
import postItemReducer from './postItemReducer';
import userDataReducer from './userDataReducer';

export default combineReducers({
    auth: authReducer,
    user: userDataReducer,
    form: formReducer,
    postList: postListReducer,
    postInfo: postItemReducer,
})