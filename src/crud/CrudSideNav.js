import React from 'react';
import SideNav, { NavItem } from '../nav/SideNav';
import metaData from '../crud/mock-data/mockMetaData';
import getObjectNames from './getObjectNames';
import { NavLink } from 'react-router-dom';
const activeState = {
  color: 'white'
};
const objectNames = getObjectNames({ metaData });
export default function CrudSideNav({ openNav, selectedNav, id, title }) {
  return (
    <SideNav title={title} id={id} openNav={openNav} selectedNav={selectedNav}>
      {objectNames.map(objectName => {
        return (
          <NavItem key={objectName}>
            <NavLink activeStyle={activeState} to={`/crud/list/${objectName}`}>
              {objectName}
            </NavLink>
          </NavItem>
        );
      })}
      <NavItem >
      <NavLink activeStyle={activeState} to='/crud/dataset'>
             DataSet
            </NavLink>
      </NavItem>
    </SideNav>
  );
}
