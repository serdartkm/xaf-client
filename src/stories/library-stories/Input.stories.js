import React from 'react';
import InputMapper from '../../library/Input';

export default {
  title: 'Inputs'
};

export const text = () => {
  return <InputMapper type='text' />;
};
export const email = () => {
  return <InputMapper type='email' />;
};
export const password = () => {
  return <InputMapper type='password' />;
};

export const date = () => {
  return <InputMapper type='date' />;
};

export const file = () => {
  return <InputMapper type='file' />;
};
export const checkbox = () => {
  return <InputMapper type='checkbox' />;
};

export const radio = () => {
  return (
    <div>
      <InputMapper type='radio' name='gender' value={'female'} />
      <InputMapper type='radio' name='gender' value={'male'} />
      <InputMapper type='radio' name='gender' value={'unknown'} />
    </div>
  );
};

export const search = () => {
  return <InputMapper type='search' />;
};
