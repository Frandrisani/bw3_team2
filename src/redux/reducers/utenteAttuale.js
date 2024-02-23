const initialState = {
  username: "",
  token: "",
};

const selectedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_USER":
      return {
        username: action.payload.username,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default selectedUserReducer;
