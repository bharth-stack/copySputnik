import { configureStore } from "@reduxjs/toolkit";
import { allReducer } from "./Reducers/index";
export default configureStore({
  reducer: {
    ...allReducer
  },
});
