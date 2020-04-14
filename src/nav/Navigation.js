import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './css/style.css';
import useAuth from '../auth/useAuth';
import decode from 'jwt-decode';
import { logoutAction } from '../auth/actions';
export default function Navigation({ children }) {
  const dispatch = useDispatch();
  const { state } = useAuth();
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (state.token) {
      setUsername(decode(state.token).name);
    }
  }, [state.token]);
  function logout(e) {
    e.preventDefault();
    dispatch(logoutAction());
  }
  return (
    <div className='nav-border'>
      <div className='nav-root'>
        <div className='title-nav'>
          <div>WebRTC</div>
        </div>
        <div className='auth-nav'>
          {!state.token ? (
            <div>
              <Link to='/auth/login'>Login</Link>
              <Link to='/auth/signup'>Sign up</Link>
            </div>
          ) : (
            <div>
              <a href='/' onClick={logout}>
                Logout
              </a>{' '}
              ,{username}
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
