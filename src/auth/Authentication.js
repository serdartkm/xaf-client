import React from 'react';
import useAuth from './useAuth';
import { Route, Switch } from 'react-router-dom';
import './css/style.css';
const Login = React.lazy(() => import('./Login'));
const ChangePassword = React.lazy(() => import('./ChangePassword'));
const ForgotPassword = React.lazy(() => import('./ForgotPassword'));
const Signup = React.lazy(() => import('./Signup'));
export default function Authentication({ children, sidebar }) {
  const {
    handleChange,
    handleChangePass,
    handleLogin,
    handleRequestPassChange,
    handleSignup,
    state
  } = useAuth();
  return (
    <div className="authentication">
        {children({ authState: state })}
      <div className="bar-content">
      <div className="side-bar">{sidebar}</div>
      <div className="main-content">
        <Switch>
          <Route path="/login">
            <Login
              handleLogin={handleLogin}
              handleChange={handleChange}
              state={state}
            />
          </Route>
          <Route path="/signup">
            <Signup
              signup={handleSignup}
              handleChange={handleChange}
              state={state}
            />
          </Route>
          <Route path="/changepassword">
            <ChangePassword
              changePass={handleChangePass}
              handleChange={handleChange}
              state={state}
            />
          </Route>
          <Route path="/requestpasschange">
            <ForgotPassword
              requestPassChange={handleRequestPassChange}
              handleChange={handleChange}
              state={state}
            />
          </Route>
        </Switch>
      </div>
    </div>
    </div>
  );
}
