import React from 'react';
import SideNav, { NavItem } from '../nav/SideNav';

export default function CrudSideNav({ openNav, selectedNav, id, title }) {
  return (
    <SideNav title={title} id={id} openNav={openNav} selectedNav={selectedNav}>
      <NavItem>Login</NavItem>
      <NavItem>Sign up</NavItem>
      <NavItem>Change Password</NavItem>
      <NavItem>Forgot Password</NavItem>
      <NavItem>Profile</NavItem>
    </SideNav>
  );
}
