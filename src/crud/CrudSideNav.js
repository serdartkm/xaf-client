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
  const [navigations, setNavigations] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    if (appName) {
      dispatch(fetchNavigations({ appName }));
    }
  }, [appName]);
  useEffect(() => {
    if (appName && state.crud.nav[appName]) {
      setNavigations(state.crud.nav[appName]);
    }
  }, [state.crud.nav, appName]);
  return (
    <SideNav title={title} id={id} openNav={openNav} selectedNav={selectedNav}>
      {navigations.length>0 &&  navigations.map(nav => {
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
