import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ClickSlice from "./slices/ClickSlice";

const reducers = combineReducers({
  isClicked: ClickSlice,
});

export const store = configureStore({
  reducer: reducers,
});
