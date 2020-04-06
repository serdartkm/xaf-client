import React from 'react';
import useAuth from './useAuth';
export default function AuthSuccess() {
  const { state } = useAuth();
  if (state.email !== '') return <div  data-testid="welcome">Welcome, {state.email}</div>;
  return <div data-testid="welcome">Welcome, {state.emailorusername}</div>;
}
