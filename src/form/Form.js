import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as validationActions from './actions';

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: 300
};

export default function Form({ children, formTitle }) {
  //const dispatch = useDispatch();
  useEffect(() => {
  //  dispatch(validationActions.initFormValidationState());
  }, []);
  return (
    <fieldset style={style}>
      <legend>{formTitle}:</legend>
      {children}
    </fieldset>
  );
}
