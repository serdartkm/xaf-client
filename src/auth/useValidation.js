import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
export default function useValidation() {
  const state = useSelector(state => state);
  const { username, email, password } = state.auth;

  const dispatch = useDispatch();

  function validateUserNameConstraint() {

    dispatch(actions.validateUserNameConstraint({ username }));
  }
  function validateEmailConstraint() {
    dispatch(actions.validateEmailConstraint({ email }));
  }
  function validatePasswordConstraint() {
    dispatch(actions.validatePasswordConstraint({ password }));
  }
  function validateEmptyString(e) {
    const { name, value } = e.target;
    dispatch(actions.validateEmptyString({ propName: name, value }));
  }

  function resetConstraint(propName) {
 
    dispatch(actions.resetConstraint({ propName }));
  }
  return {
    validateEmailConstraint,
    validatePasswordConstraint,
    validateUserNameConstraint,
    validateEmptyString,
    resetConstraint
  };
}
