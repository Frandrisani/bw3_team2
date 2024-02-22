import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";
import postsReducer from "../reducers/postsReducer"; // Per homepage
import jobsReducer from "../reducers/jobsReducer"; // Reducer per lavori

const globalReducer = combineReducers({
  profile: profileReducer,
  postsReducer: postsReducer, // per homepage
  jobs: jobsReducer, // per lavoro
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
