import React from 'react';
export const CRUDContext = React.createContext();

export default function CRUDContextProvider({
  children,
  columnNames,
  list,
  objectName
}) {
  debugger;
  return (
    <CRUDContext.Provider value={{ list, columnNames, objectName }}>
      {children}
    </CRUDContext.Provider>
  );
}
