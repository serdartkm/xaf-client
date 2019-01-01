import { useReducer } from 'react';
import reducer, { initState } from './reducer';
import * as actions from './actions';
export default function useValidation(initState) {
  const [validationState, dispatch] = useReducer(reducer, initState);

  function validateInput({ propName, value, validationType }) {
    dispatch(actions.validateInput({ propName, value, validationType }));
  }
  return { validationState, validateInput };
}
