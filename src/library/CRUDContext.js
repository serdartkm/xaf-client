import React from 'react';
import { useSelector } from 'react-redux';
export const CRUDContext = React.createContext();

export default function CRUDContextProvider({ children }) {
  const reduxState = useSelector(state => state);
  const { objectName, propNames } = reduxState.ui;
  const { list } = reduxState.list;
  return (
    <CRUDContext.Provider value={{ list, propNames, objectName }}>
      {children}
    </CRUDContext.Provider>
  );
}
