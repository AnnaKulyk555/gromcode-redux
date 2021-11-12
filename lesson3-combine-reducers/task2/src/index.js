import { store, increment, decrement, reset } from './counter';

store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(decrement(1));
store.dispatch(reset());

store.subscribe(() => {
  console.log(store);
});

console.log(store.getState());
