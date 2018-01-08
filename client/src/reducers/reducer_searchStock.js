import {SEARCH_STOCK} from '../actions';

export default function(state=null,action){
    switch(action.type){
        case SEARCH_STOCK:
            return action.payload;
        default:
            return state;    
    }
}