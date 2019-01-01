import { useDispatch, useSelector } from 'react-redux';

import * as actions from './actions';
export default function useAuth() {
  const state = useSelector(state => state);
  debugger;
  const dispatch = useDispatch();

  function handleChange(e) {
    debugger;
    const { value, name } = e.target;
    debugger;
    dispatch(actions.valueChanged({ propName: name, value }));
  }
  function handleLogin() {
    dispatch(actions.login());
  }

  function handleSignup() {
    dispatch(actions.signup());
  }
  function handleChangePass() {
    dispatch(actions.changePassword());
  }
  function handleRequestPassChange() {
    dispatch({ type: actions.requestPassChange() });
  }

  return {
    handleChange,
    handleChangePass,
    handleLogin,
    handleRequestPassChange,
    handleSignup,
    state: state.auth
  };
}
