import { combineReducers } from 'redux';
import commentReducer from './comment';

const rootReducer = combineReducers({
  comments: commentReducer
});

export default rootReducer;
