import React from 'react';
import Expand from './Expand';
import Collapse from './Collapse';
import './css/style.css';

export function NavItem({ children }) {
  return <div className='nav-item'>{children}</div>;
}

export default function SideNav({
  id,
  openNav,
  selectedNav,
  children,
  title,
  onClick,
  appName
}) {
  function handleOpenNav() {
    openNav(id);
    onClick();
  }

  return (
    <div
      id={id}
      className='side-nav'
      style={{ height: selectedNav === id ? '100%' : 40 }}
    >
      <div
        className='bar-tool'
        data-testid={`bar-tool-${appName}`}
        onClick={handleOpenNav}
      >
        <div>{title}</div>
        {selectedNav === id ? <Collapse /> : <Expand />}
      </div>
      <div className='nav-item-cont'>{children}</div>
    </div>
  );
}
