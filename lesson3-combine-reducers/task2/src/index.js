import { store, increment, decrement } from './counter';

store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(decrement(1));

store.subscribe(() => {
  console.log(store);
});

console.log(store.getState());
