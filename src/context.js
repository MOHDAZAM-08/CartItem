import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [sharedState, setSharedState] = useState([]);
  const [cartdata, setcartdata] = useState([]);

  return (
    <AppContext.Provider value={{ sharedState, setSharedState,cartdata, setcartdata}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
