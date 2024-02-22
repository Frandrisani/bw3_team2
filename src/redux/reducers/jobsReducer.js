import {
  FETCH_JOBS_START,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  FETCH_CATEGORY,
  PERSONAL_PROFILE,
  TURN_OFF_SPINNER,
} from "../actions";

const initialState = {
  jobsList: [],
  isLoading: true,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_JOBS_START:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     error: null,
    //   };
    // case FETCH_JOBS_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     jobsList: action.payload,
    //   };
    // case FETCH_JOBS_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload,
    //   };
    case PERSONAL_PROFILE:
      return {
        ...state,
        jobsList: action.payload,
      };

    case TURN_OFF_SPINNER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default jobsReducer;
