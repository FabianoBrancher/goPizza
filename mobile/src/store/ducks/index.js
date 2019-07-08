import { combineReducers } from 'redux';

import login from './login';
import signUp from './signUp';

const reducer = combineReducers({
  login,
  signUp,
});

export default reducer;
