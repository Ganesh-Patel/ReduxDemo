import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slices/counterslice";
 const mystore = configureStore({
    reducer: counterSlice,
  });

  export default mystore;