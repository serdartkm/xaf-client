import React from 'react';
import SideNav, { NavItem } from '../nav/SideNav';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchNavigations } from './nav/actions';
const activeState = {
  color: 'white'
};

export default function CrudSideNav({
  openNav,
  selectedNav,
  id,
  title,
  appName
}) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { navigations, loading } = state.crud.nav;
  debugger;
  function handleFetchNavigation() {
    dispatch(fetchNavigations({ appName }));
  }

  return (
    <SideNav
      appName={appName}
      title={title}
      id={id}
      openNav={openNav}
      selectedNav={selectedNav}
      onClick={handleFetchNavigation}
    >
      {loading ? (
        <div>Loading</div>
      ) : (
        navigations.map((nav, i) => {
          debugger;
          return (
            <NavItem key={i}>
          
              <NavLink 
                data-testid={`nav-item-${nav.navigation}`}
                activeStyle={activeState}
                to={{
                  pathname: `/crud/list/${nav.objectName}`,
                  state: { navigation: nav.navigation }
                }}
              >
                {nav.navigation}
              </NavLink>
            </NavItem>
          );
        })
      )}
      <NavItem>
        <NavLink activeStyle={activeState} to='/crud/dataset'>
          DataSet
        </NavLink>
      </NavItem>
    </SideNav>
  );
}
