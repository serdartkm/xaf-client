import useAuth from './useAuth';
import React from 'react'
export default function AuthProvider({ children }) {
  const {
    handleChange,
    handleChangePass,
    handleLogin,
    handleRequestPassChange,
    handleSignup,
    state
  } = useAuth();
  
  return (
    <div>
      {  children({
        handleChange,
        handleChangePass,
        handleLogin,
        handleRequestPassChange,
        handleSignup,
        state
      })}
    </div>
  );
}
