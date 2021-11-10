import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 44, name: 'Sarah' }));
// store.dispatch(deleteUser(76));
store.dispatch(deleteUser(44));

store.subscribe(() => {
  console.log(store);
});

console.log(store.getState());
