import React from 'react';
import SideNav, { NavItem } from '../nav/SideNav';
import metaData from '../crud/mock-data/mockMetaData';
import getObjectNames from './getObjectNames';
const objectNames = getObjectNames({ metaData });
export default function CrudSideNav({ openNav, selectedNav, id, title }) {
  return (
    <SideNav title={title} id={id} openNav={openNav} selectedNav={selectedNav}>
      {objectNames.map(objectName => {
        return <NavItem key={objectNames}>{objectName}</NavItem>;
      })}
    </SideNav>
  );
}
