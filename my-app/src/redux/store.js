import { configureStore } from "@reduxjs/toolkit";
import { phoneBookApi } from "./phoneBook/phoneBookSlice";

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});
