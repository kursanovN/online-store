import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

export const store = configureStore({
  reducer: {
    [productSlice.name]: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
