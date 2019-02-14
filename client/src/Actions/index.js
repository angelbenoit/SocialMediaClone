import axios from 'axios';
import { FETCH_USER, FETCH_POSTS, FETCH_POST_ITEM, AUTH_ERROR, AUTH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current_user", {headers: {authorization: localStorage.getItem("token")}});
    dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchPosts = () => async (dispatch) => {
    const res = await axios.get("/api/post_list", {headers: {authorization: localStorage.getItem("token")}});
    //console.log(`Fetching posts: ${res.data[0].posts}`);
    dispatch({type: FETCH_POSTS, payload: res.data[0].posts});
};

export const fetchSpecifiedPostData = (id) => async (dispatch) => {
    const res = await axios.get("/api/post_list");
    const postList = res.data[0].posts;
    //matchPost holds the post object if it matches the id passed in
    let matchPost = {};

    for(let i = 0; i < postList.length; i++){
        if(id === postList[i]._id){
            matchPost = postList[i];
            break;
        }
    }
    //console.log(matchPost);
    dispatch({type: FETCH_POST_ITEM, payload: matchPost});
};

export const signup = (formProps, callback) => async dispatch => {
    //console.log(formProps);
    try {
      const response = await axios.post(
        '/api/signup',
        formProps
      );

      dispatch({ type: AUTH_USER, payload: response.data.token });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    }
  };

  export const signin = (formProps, callback) => async dispatch => {
    try {
      const response = await axios.post(
        '/api/signin',
        formProps
      );

      dispatch({ type: AUTH_USER, payload: response.data.token });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
    }
  };