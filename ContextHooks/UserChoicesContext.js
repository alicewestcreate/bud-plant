import { createContext, useState } from "react";

const UserChoicesContext = createContext();

export const UserChoicesContextProvider = ({ children }) => {
  
  const [userChoices, setUserChoices] = useState({
    allProperties: [],
    allValues: [],
    allFeatures: []
  });

  return (
    <UserChoicesContext.Provider value={{ userChoices, setUserChoices }}>
      {children}
    </UserChoicesContext.Provider>
  );
};

export default UserChoicesContext;
