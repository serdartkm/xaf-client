import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import useAuth from '../auth/useAuth';
export default function Navigation({ children }) {
  const { state } = useAuth();

  return (
    <div className="nav-border">
      <div className="nav-root">
        <div className="title-nav">
          <div>Title</div>
        </div>
        <div className="auth-nav">
          {!state.isLoggedIn ? (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          ) : (
            <div>Logout</div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
