import React, { useEffect, useState } from 'react';
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

  function handleFetchNavigation() {
    dispatch(fetchNavigations({ appName }));
  }

  return (
    <SideNav
      title={title}
      id={id}
      openNav={openNav}
      selectedNav={selectedNav}
      onClick={handleFetchNavigation}
    >
      {state.crud.nav.navigations.map(nav => {
        return (
          <NavItem key={nav.objectName}>
            <NavLink
              data-testid={nav.objectName}
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
      })}
      <NavItem>
        <NavLink activeStyle={activeState} to='/crud/dataset'>
          DataSet
        </NavLink>
      </NavItem>
    </SideNav>
  );
}
