import React, { createContext, useReducer, useState } from "react";
import { INITIAL_STATE, loginReducer } from "./Reducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);
  // const [count, setCount] = useState(0);
  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// export default UserContext;
