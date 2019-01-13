import { combineReducers } from 'redux';

import user from './user';
import cards from './cards';
import contacts from './contacts';

export default combineReducers({
  user, 
  cards,
  contacts,

});