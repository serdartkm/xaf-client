import React, { Suspense } from 'react';
import useAuth from './useAuth';
import { Route, Switch } from 'react-router-dom';
import './css/style.css';
import useValidation from './useValidation';
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
    handleSignup,
    state
  } = useAuth();
  const {
    validateEmailConstraint,
    validatePasswordConstraint,
    validateEmptyString
  } = useValidation();
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Switch>
        <Route path="/auth/login">
          <Login
            validateEmptyString={validateEmptyString}
            validateEmailConstraint={validateEmailConstraint}
            handleLogin={handleLogin}
            handleChange={handleChange}
            state={state}
          />
        </Route>
        <Route path="/auth/signup">
          <Signup
            validateEmailConstraint={validateEmailConstraint}
            validatePasswordConstraint={validatePasswordConstraint}
            validateUserNameConstraint={validateUserNameConstraint}
            signup={handleSignup}
            handleChange={handleChange}
            state={state}
          />
        </Route>
        <Route path="/auth/changepassword">
          <ChangePassword
            changePass={handleChangePass}
            handleChange={handleChange}
            state={state}
          />
        </Route>
        <Route path="/auth/requestpasschange">
          <ForgotPassword
            requestPassChange={handleRequestPassChange}
            handleChange={handleChange}
            state={state}
          />
        </Route>
        <Route path="/auth/profile">
          <Profile state={state} />
        </Route>
      </Switch>
    </Suspense>
  );
}
