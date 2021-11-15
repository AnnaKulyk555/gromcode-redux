import { combineReducers, createStore } from 'redux';
import { usersReducer } from './users.reducer';

const appReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
