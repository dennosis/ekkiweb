import { combineReducers } from 'redux';

import cards from './cards';
import user from './user';

export default combineReducers({
  cards,
  user
});