import { combineReducers } from 'redux';
import BestStock from './reducer_bestStock';
import SearchStock from './reducer_searchStock';
import GetStock from './reducer_getStock';

const rootReducer = combineReducers({
  BestStock,
  SearchStock,
  GetStock
});

export default rootReducer;
