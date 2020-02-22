import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigationChanges } from './redux/ui-reducer/uiActions';
import { createObjectClicked } from './redux/detail-ui-reducer/detail-ui-action';
import mockMetaData from './mock-data/mockMetaData';
export const CRUDContext = React.createContext();

export default function CRUDContextProvider({
  children,
  metaData = mockMetaData
}) {
  const reduxState = useSelector(state => state);
  const dispatch = useDispatch();
  const { objectName, propNames } = reduxState.ui;
  const { list } = reduxState.list;

  function handleNavChange() {
    dispatch(navigationChanges({ objectName, metaData }));
  }

  function handleCreateObject() {
    dispatch(createObjectClicked({ objectName, metaData }));
  }

  function handleValueChange (){

  }

  return (
    <CRUDContext.Provider
      value={{
        list,
        propNames,
        objectName,
        handleNavChange,
        handleCreateObject,
        handleValueChange
      }}
    >
      {children}
    </CRUDContext.Provider>
  );
}
