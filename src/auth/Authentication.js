import React, { Suspense } from 'react';
import useAuth from './useAuth';
import { Route, Switch } from 'react-router-dom';
import './css/style.css';

import { validateUserNameConstraint } from './actions';
const Login = React.lazy(() => import('./Login'));
const ChangePassword = React.lazy(() => import('./ChangePassword'));
const ForgotPassword = React.lazy(() => import('./ForgotPassword'));
const Signup = React.lazy(() => import('./Signup'));
const Profile = React.lazy(() => import('./Profile'));
export default function Authentication({ children, sidebar }) {
  const {
    handleChange,
    handleChangePass,
    handleLogin,
    handleRequestPassChange,
    handleSignup
  } = useAuth();

  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/signup">
          <Signup  />
        </Route>
        <Route path="/auth/changepassword">
          <ChangePassword
           
          />
        </Route>
        <Route path="/auth/requestpasschange">
          <ForgotPassword
            
          />
        </Route>
        <Route path="/auth/profile">
          <Profile />
        </Route>
      </Switch>
    </Suspense>
  );
}
