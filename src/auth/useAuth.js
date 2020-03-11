import { useReducer } from 'react';
import reducer, { initState } from './reducer';
import * as actions from './actions';
export default function useAuth() {
  const [state, dispatch] = useReducer(reducer,initState);

  function handleChange(e) {
    debugger;
    const { value, name } = e.target;
    debugger;
    dispatch(actions.valueChanged({ propName: name, value }));
  }
  function handleLogin() {
    const { email, password } = state;
    dispatch(actions.login({ email, password, dispatch }));
  }

  function handleSignup() {
    const { username, email, password } = state;
    dispatch(actions.signup({ username, password, email, dispatch }));
  }
  function handleChangePass() {
    const { email, password } = state;
    dispatch(actions.changePassword({ password, email, dispatch }));
  }
  function handleRequestPassChange() {
    const { email } = state;
    dispatch({ type: actions.requestPassChange({ email, dispatch }) });
  }

  return {
    handleChange,
    handleChangePass,
    handleLogin,
    handleRequestPassChange,
    handleSignup,
    state
  };
}
