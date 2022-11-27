export const INITIAL_STATE = {
  isLoading: true,
  user: {},
  errorText: "",
  // firstName: "",
  // lastName: "",
  // accountNumber: "",
  // photo: null,
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    // case "RETRIEVE_USER":
    //   return {
    //     ...state,
    //     email: action.email,
    //     password: action.password,
    //     isLoading: false,
    //   };
    case "LOGIN_START":
      return {
        ...state,
        isLoading: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    // case "LOGOUT":
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // case "REGISTER":
    //   return {
    //     ...state,
    //     email: action.email,
    //     password: action.password,
    //     user: action.payload,
    //     isLoading: false,
    //   };
    case "LOGIN_ERROR":
      return {
        ...state,
        errorText: "Your email or password is incorrect. Please try again.",
        isLoading: false,
      };
    default:
      return state;
  }
};
