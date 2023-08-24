import { useReducer } from "react";
import {
    QUERY_ALL_PRODUCTS
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case QUERY_ALL_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };


    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}
