const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_LOGIN":
      return { ...state, openLogin: true };
    case "CLOSE_LOGIN":
      return { ...state, openLogin: false };
    case "UPDATE_USERS":
      return { ...state, currentUser: action.payload };
    case "REGISTER_USER":
      // Handle registering user
      return { ...state, currentUser: action.payload };
    case "SET_CURRENT_USER":
      // Handle setting current user
      return { ...state, currentUser: action.payload };
    default:
      throw new Error("No matched action");
  }
};
export default reducer;
