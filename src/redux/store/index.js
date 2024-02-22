import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";
import allExperienceReducer from "../reducers/allExperience";
import singleExperienceReducer from "../reducers/singleExperience";

const globalReducer = combineReducers({
  profile: profileReducer,
  allExperience: allExperienceReducer,
  singleExperience: singleExperienceReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
