import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filter/filterSlice";

export default configureStore({
  reducer: {
    filter: filterSlice,
  },
});
