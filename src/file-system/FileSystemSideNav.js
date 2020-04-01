import React from 'react';
import SideNav, { NavItem } from '../nav/SideNav';
import { NavLink } from 'react-router-dom';
const activeState = {
  color: 'white'
};

export default function CrudSideNav({ openNav, selectedNav, id, title }) {
  return (
    <SideNav title={title} id={id} openNav={openNav} selectedNav={selectedNav}>
      <NavItem>
        <NavLink activeStyle={activeState} to='/filesystem/texteditor'>
          Text Editor
        </NavLink>
      </NavItem>
    </SideNav>
  );
}
