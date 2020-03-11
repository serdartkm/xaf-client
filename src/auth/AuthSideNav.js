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
        <NavLink activeStyle={activeStyle} to='/auth/login'>
          Login
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeStyle={activeStyle} to='/auth/signup'>
          Signup
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeStyle={activeStyle} to='/auth/changepassword'>
          Change Password
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeStyle={activeStyle} to='/auth/requestpasschange'>
          Frogot Password
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeStyle={activeStyle} to='/auth/profile'>
          Profile
        </NavLink>
      </NavItem>
    </SideNav>
  );
}
