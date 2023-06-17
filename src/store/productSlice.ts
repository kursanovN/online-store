import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../utils/constants";

const initialState = {
  store: productData,
};

export const productSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return {
        ...state,
        store: state.store.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.staticPrice,
            };
          }
          return item;
        }),
      };
    },
    incremenProduct: (state, action) => {
      return {
        ...state,
        store: state.store.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.staticPrice,
            };
          }
          return item;
        }),
      };
    },
    decrementProduct: (state, action) => {
      return {
        ...state,
        store: state.store.map((item) => {
          if (item.id === action.payload && item.quantity !== 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - item.staticPrice,
            };
          }
          return item;
        }),
      };
    },
    removeProduct: (state, action) => {
      return {
        ...state,
        store: state.store.map((item) => {
          if (item.id === action.payload && item.quantity !== 0) {
            return {
              ...item,
              quantity: (item.quantity = 0),
              price: item.staticPrice,
            };
          }
          return item;
        }),
      };
    },
  },
});

export const productAction = productSlice.actions;
