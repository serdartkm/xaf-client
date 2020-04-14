import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
export default function useAuth() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { value, name } = e.target;

    dispatch(actions.valueChanged({ propName: name, value }));
  }
  function handleLogin(e) {
    e.preventDefault();
    dispatch(actions.login());
  }

  function handleSignup() {
    dispatch(actions.signup());
  }
  function handleChangePass() {
    dispatch(actions.changePassword());
  }
  function handleRequestPassChange() {
    dispatch(actions.requestPassChange());
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
