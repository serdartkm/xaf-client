import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from '../Input';
import InputContainer from './InputContainer';

describe('Input', () => {
  it('Testing Text input type', () => {
    const { getByTestId } = render(
      <InputContainer>
        {({ value, handleChange }) => {
          return (
            <Input
              name='firstName'
              value={value}
              onChange={handleChange}
              type='text'
              placeholder='Enter Firstname'
            />
          );
        }}
      </InputContainer>
    );

    expect(getByTestId(/text/i)).toHaveAttribute('type', 'text');
    expect(getByTestId(/text/i)).toHaveAttribute('name', 'firstName');
    expect(getByTestId(/text/i)).toHaveAttribute(
      'placeholder',
      'Enter Firstname'
    );
    fireEvent.change(getByTestId('text'), { target: { value: 'dragos' } });
    expect(getByTestId('text')).toHaveValue('dragos');
  });

  it('Testing Date input type', () => {
    const { getByTestId } = render(
      <InputContainer>
        {({ value, handleChange }) => {
  
          return (
            <Input
              name='birthDate'
              value={value}
              onChange={handleChange}
              type='date'
              placeholder=''
            />
          );
        }}
      </InputContainer>
    );

    expect(getByTestId(/date/i)).toHaveAttribute('type', 'date');
    expect(getByTestId(/date/i)).toHaveAttribute('name', 'birthDate');
  });

  it('Testing Checkbox input type', () => {
    const { getByTestId } = render(
      <InputContainer>
        {({ value, handleCheck }) => {
      
          return (
            <Input
              name='male'
              value={value}
              onChange={handleCheck}
              type='checkbox'
              placeholder=''
            />
          );
        }}
      </InputContainer>
    );

    expect(getByTestId(/checkbox/i)).toHaveAttribute('type', 'checkbox');
    expect(getByTestId(/checkbox/i)).toHaveAttribute('name', 'male');
    fireEvent.change(getByTestId('checkbox'), { target: { checked: true } });
    expect(getByTestId(/checkbox/i)).toBeChecked();
  });

  it('Testing Select input type', () => {
    const { getByTestId } = render(
      <InputContainer>
        {({ value, handleChange }) => {
    
          return (
            <Input
              name='numbers'
              value={value}
              items={[
                { label: 'zero', id: 0 },
                { label: 'one', id: 1 },
                { label: 'two', id: 2 },
                { label: 'three', id: 3 }
              ]}
              onChange={handleChange}
              type='select'
              placeholder='Select Number'
            />
          );
        }}
      </InputContainer>
    );

    expect(getByTestId(/select/i)).toHaveAttribute('type', 'select');
    expect(getByTestId(/select/i)).toHaveAttribute('name', 'numbers');
    fireEvent.change(getByTestId('select'), { target: { value: 3 } });
    expect(getByTestId('select')).toHaveValue('3');
  });


  it('Testing Radio input type', () => {
    const { getByTestId } = render(
      <InputContainer>
        {({ value, handleChange }) => {
      
          return (
            <Input
              name='numbers'
              value={value}
              items={[
                { label: 'zero', id: 0 },
                { label: 'one', id: 1 },
                { label: 'two', id: 2 },
                { label: 'three', id: 3 }
              ]}
              onChange={handleChange}
              type='radio'
              placeholder='Select Number'
            />
          );
        }}
      </InputContainer>
    );

     expect(getByTestId('radioId-one')).toHaveAttribute('type', 'radio');
     expect(getByTestId('radioId-one')).toHaveAttribute('name', 'numbers');

     fireEvent.change(getByTestId('radioId-one'), { target: { checked: true } });
     expect(getByTestId('radioId-one')).toBeChecked();
  });
});
