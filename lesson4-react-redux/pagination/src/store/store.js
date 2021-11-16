import { combineReducers, createStore } from 'redux';
import { usersReducer } from './users.reducer';

const appReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(appReducer);

export default store;
