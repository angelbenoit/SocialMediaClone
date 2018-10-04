import { FETCH_POSTS } from "../Actions/types";

export default function(state = null, action){
    switch(action.type){
        case FETCH_POSTS:
            return action.payload || false;
        default:
            return state;
    }
}