import React from 'react';
import AuthProvider from './AuthProvider';
import Login from './Login';
export default function Auth() {
  return (
    <AuthProvider>
      {({ handleChange, handleLogin, state }) => {
        return (
          <Login
            state={state}
            handleLogin={handleLogin}
            handleChange={handleChange}
          />
        );
      }}
    </AuthProvider>
  );
}
