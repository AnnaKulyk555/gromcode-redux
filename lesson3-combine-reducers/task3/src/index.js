import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import store from './store';
import { removeUser, setUser } from './user.actions';

store.dispatch(setLanguage('ru'));
store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 77, name: 'cacao' }));
store.dispatch(removeProduct(77));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());

store.subscribe(() => {
  console.log(store);
});

console.log(store.getState());
