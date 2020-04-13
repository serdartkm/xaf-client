import React from 'react';
import useAuth from './useAuth';

export default function AuthSuccess() {
  const { state } = useAuth();

  return (
    <div data-testid='welcome' style={{ backgroundColor: 'yellow' }}>
      <div>{state.successMessage}</div>
      {state.email || state.emailorusername}
    </div>
  );
}
