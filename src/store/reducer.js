import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";
const initialState = {
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload.id),
      };
    default:
      return state;
  }
};
