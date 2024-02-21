import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";
import postsReducer from "../reducers/postsReducer"; // Per homepage

const globalReducer = combineReducers({
  profile: profileReducer,
  postsReducer: postsReducer, // per homepage
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
