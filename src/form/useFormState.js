import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import validationTypes from './validationTypes';
import validationStates from './validationStates';
const valTypes = Object.keys(validationTypes);
export default function useForm() {
  const [formState, setFormState] = useState(validationStates.INVALID);
  const state = useSelector(state => state);
  useEffect(() => {
    valTypes.forEach(validationType => {
      if (
        state.form &&
        state.form.validation &&
        state.form.validation[validationType]
      ) {
        setFormState(validationStates.VALID);
        const validationState =
          state.form.validation[validationType].validationState;
        if (
          validationState === validationStates.INACTIVE ||
          validationState === validationStates.INVALID
        ) {
          setFormState(validationStates.INVALID);
        }
      }
    });
  }, [state]);

  return { formState };
}
