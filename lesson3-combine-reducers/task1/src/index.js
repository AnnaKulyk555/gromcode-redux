import store from './store.js';
import { addUser, deleteUser, updateUser } from './users.actions.js';
import { increment, decrement, reset } from './counter.actions';

store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(decrement(1));
store.dispatch(reset());
store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 44, name: 'Sarah' }));
store.dispatch(updateUser(44, { name: 'John' }));
store.dispatch(deleteUser(76));

store.subscribe(() => {
  console.log(store);
});

console.log(store.getState());
