import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import snippets from './snippets';

const rootReducer = combineReducers({
  snippets,
  router
});

export default rootReducer;
