import { createContext, useReducer } from "react";
import reducer from "./reducer.jsx";
import PropTypes from "prop-types";

const initialState = {
  currentUser: null,
  openLogin: false,
};

export const Context = createContext(initialState);

const ContextProvider = ({ children }) => {
  // Correct spelling of 'children'
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

export default ContextProvider;
