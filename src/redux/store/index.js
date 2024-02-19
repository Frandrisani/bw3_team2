import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";

const globalReducer = combineReducers({
  profile: profileReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
