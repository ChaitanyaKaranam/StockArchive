import {GET_STOCK} from '../actions';

export default function(state=null,action){
    switch(action.type){
        case GET_STOCK:
            console.log('Reducer Triggered');
            return action.payload;
        default:
            return state;    
    }
}