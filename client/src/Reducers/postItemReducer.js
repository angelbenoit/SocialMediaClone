import { FETCH_POST_ITEM } from "../Actions/types";

export default function(state = null, action){
    switch(action.type){
        case FETCH_POST_ITEM:
            return action.payload || false;
        default:
            return state;
    }
}