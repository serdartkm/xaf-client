import React from 'react';
import SideNav, { NavItem } from '../nav/SideNav';
import metaData from '../crud/mock-data/mockMetaData';

import { NavLink } from 'react-router-dom';
import getNavigations from './getNavigations';
const activeState = {
  color: 'white'
};

export default function CrudSideNav({ openNav, selectedNav, id, title }) {
  return (
    <SideNav title={title} id={id} openNav={openNav} selectedNav={selectedNav}>
      {getNavigations({ metaData }).map(nav => {
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
