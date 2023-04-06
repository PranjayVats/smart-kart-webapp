import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";
import productSlice from "./slices/ProductSlice";
import userSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
