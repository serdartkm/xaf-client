import React from 'react';
import SideNav, { NavItem } from '../nav/SideNav';
import { NavLink } from 'react-router-dom';
const activeStyle = {
  color: 'white'
};
export default function CrudSideNav({ openNav, selectedNav, id, title }) {
  return (
    <SideNav title={title} id={id} openNav={openNav} selectedNav={selectedNav}>
      <NavItem>
        <NavLink activeStyle={activeStyle} to='/login'>
          Login
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeStyle={activeStyle} to='/signup'>
          Signup
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeStyle={activeStyle} to='/changepassword'>
          Change Password
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeStyle={activeStyle} to='/requestpasschange'>
          Frogot Password
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeStyle={activeStyle} to='/profile'>
          Profile
        </NavLink>
      </NavItem>
    </SideNav>
  );
}
