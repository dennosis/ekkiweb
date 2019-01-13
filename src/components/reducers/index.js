import { combineReducers } from 'redux';

import user from './user';
import cards from './cards';
import contacts from './contacts';
import transactions from './transactions';

export default combineReducers({
  user, 
  cards,
  contacts,
  transactions,
});