import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import useJWTToken from '../auth/useJWToken'
import useAuth from '../auth/useAuth'
export default function Navigation({ children }) {
  const {isLoggedIn}=useJWTToken()
  const {state}=useAuth()
  debugger;
  return (
    <div className='nav-border'>
      <div className='nav-root'>
        <div className='title-nav'>
          <div>Title</div>
        </div>
        <div className='auth-nav'>
          
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign up</Link>
        </div>
      </div>
      {children}
    </div>
  );
}
