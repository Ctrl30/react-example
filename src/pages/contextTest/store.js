import React, { createContext, useContext } from "react";

const GlobalContext = createContext(null);

export function GlobalProvider({ children, providerVal }) {
  return (
    <GlobalContext.Provider value={providerVal}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
