import {BEST_STOCK} from '../actions';

export default function(state=null,action){
    switch(action.type){
        case BEST_STOCK:
            return action.payload;
        default:
            return state;    
    }
}