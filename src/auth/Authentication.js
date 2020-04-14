import React, { Suspense, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from './useAuth';
import { setToken } from './actions';
import './css/style.css';

const Login = React.lazy(() => import('./Login'));
const ChangePassword = React.lazy(() => import('./ChangePassword'));
const ForgotPassword = React.lazy(() => import('./ForgotPassword'));
const Signup = React.lazy(() => import('./Signup'));
const Profile = React.lazy(() => import('./Profile'));
const AuthSuccess = React.lazy(() => import('./AuthSuccess'));

export default function Authentication() {
  const { state } = useAuth();
  const distpatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('xaf')) {
      distpatch(setToken({ token: localStorage.getItem('xaf') }));
    }
  }, []);
  useEffect(() => {
    if (state.isLoggedIn || state.passChangeRequested) {
      history.push('/auth/authsuccess');
    }
  }, [state.isLoggedIn, state.isPasswordChanged, state.passChangeRequested]);

  useEffect(() => {
    if (state.token) {
      localStorage.setItem('xaf', state.token);
    } else {
      localStorage.removeItem('xaf');
    }
  }, [state.token]);

  return (
    <Suspense fallback={<div className='loading'>Loading...</div>}>
      <Switch>
        <Route path='/auth/login'>
          <Login />
        </Route>
        <Route path='/auth/signup'>
          <Signup />
        </Route>
        <Route path={['/auth/changepassword/:token', '/auth/changepassword']}>
          <ChangePassword />
        </Route>
        <Route path='/auth/requestpasschange'>
          <ForgotPassword />
        </Route>
        <Route path='/auth/profile'>
          <Profile />
        </Route>
        <Route path='/auth/authsuccess'>
          <AuthSuccess />
        </Route>
      </Switch>
    </Suspense>
  );
}
