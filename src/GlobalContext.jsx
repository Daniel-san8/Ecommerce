import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);
  return (
    <GlobalContext.Provider value={{ nome: "Daniel Santos" }}>
      {children}
    </GlobalContext.Provider>
  );
};
