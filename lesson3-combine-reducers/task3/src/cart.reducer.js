import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

export const cartReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newProducts = state.products.concat(action.payload.product);
      return {
        ...state,
        products: newProducts,
      };
    }
    case REMOVE_PRODUCT: {
      const newProducts = state.products.filter(product => product.id !== action.payload.productId);
      return {
        ...state,
        products: newProducts,
      };
    }
    default:
      return state;
  }
};
