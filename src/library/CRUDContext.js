import React from 'react';
export const CRUDContext = React.createContext();

export default function CRUDContextProvider({
  children,
  columnNames,
  list,
  objectName,
  objectNames
}) {
  debugger;
  return (
    <CRUDContext.Provider
      value={{ list, columnNames, objectName, objectNames }}
    >
      {children}
    </CRUDContext.Provider>
  );
}
