import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigationChanges } from './redux/ui-reducer/uiActions';
export const CRUDContext = React.createContext();

export default function CRUDContextProvider({ children }) {
  const reduxState = useSelector(state => state);
  const dispatch = useDispatch();
  const { objectName, propNames } = reduxState.ui;
  const { list } = reduxState.list;

  function handleNavChange({ objectName, metaData }) {
    dispatch(navigationChanges({ objectName, metaData }));
  }

  return (
    <CRUDContext.Provider
      value={{ list, propNames, objectName, handleNavChange }}
    >
      {children}
    </CRUDContext.Provider>
  );
}
