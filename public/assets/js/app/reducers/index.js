import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

//import pages from './pages';
//import menuVisible from './menuVisible';
//import managePostTab from './managePostTab';


const rootReducer = combineReducers({
  //pages,
  //menuVisible,
  //managePostTab,
  router
});

export default rootReducer;
