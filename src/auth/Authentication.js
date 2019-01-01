import React, { Suspense, useEffect } from 'react';
import useAuth from './useAuth';
import { Route, Switch, useHistory } from 'react-router-dom';
import './css/style.css';

import { validateUserNameConstraint } from './actions';
const Login = React.lazy(() => import('./Login'));
const ChangePassword = React.lazy(() => import('./ChangePassword'));
const ForgotPassword = React.lazy(() => import('./ForgotPassword'));
const Signup = React.lazy(() => import('./Signup'));
const Profile = React.lazy(() => import('./Profile'));
const AuthSuccess = React.lazy(() => import('./AuthSuccess'));
export default function Authentication({ children, sidebar }) {
  const {
    state,
    handleChange,
    handleChangePass,
    handleLogin,
    handleRequestPassChange,
    handleSignup
  } = useAuth();
  const history = useHistory();
  useEffect(() => {
    if (state.isLoggedIn || state.isPasswordChanged) {
      history.push('/auth/authsuccess');
    }
  }, [state.isLoggedIn, state.isPasswordChanged]);

  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/signup">
          <Signup />
        </Route>
        <Route path={['/auth/changepassword/:token?', '/auth/changepassword']}>
          <ChangePassword />
        </Route>
        <Route path="/auth/requestpasschange">
          <ForgotPassword />
        </Route>
        <Route path="/auth/profile">
          <Profile />
        </Route>
        <Route path="/auth/authsuccess">
          <AuthSuccess />
        </Route>
      </Switch>
    </Suspense>
  );
}
