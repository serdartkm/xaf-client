import React, { useContext } from 'react';
import { CRUDContext } from '../CRUDContext';
import './css/style.css';
export default function Input({
  type,
  onChange,
  value = '',
  placeholder,
  name,
  items
}) {
  switch (type) {
    case 'text':
      return (
        <input
          data-testid={name}
          className='input'
          type='text'
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );
    case 'email':
      return (
        <input
          data-testid={name}
          className='input'
          type='email'
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );
    case 'password':
      return (
        <input
          data-testid={name}
          className='input'
          type='password'
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );
    case 'file':
      return (
        <input
          data-testid={name}
          className='input'
          type='file'
          onChange={onChange}
          value={value}
          name={name}
        />
      );

    case 'date':
      return (
        <input
          data-testid={name}
          className='input'
          type='date'
          onChange={onChange}
          value={value}
          name={name}
        />
      );
    case 'checkbox':
      return (
        <input
          data-testid={name}
          className='input'
          type='checkbox'
          onChange={onChange}
          checked={value}
          name={name}
        />
      );

    case 'radio':
      return items.map(i => (
        <div key={i.id}>
          <input
            data-testid={`${name}-${i.label}`}
            type='radio'
            name={name}
            value={i.id}
            checked={value === i.id}
            onChange={onChange}
          ></input>
          <label> {i.label}</label>
        </div>
      ));

    case 'select':
      return (
        <select
          value={value}
          onChange={onChange}
          data-testid={name}
          type='select'
          name={name}
        >
          {items.map(v => (
            <option key={v.id} value={v.id}>
              {v.lable}
            </option>
          ))}
        </select>
      );
    case 'search':
      return (
        <input
          data-testid={name}
          className='input'
          type='search'
          onChange={onChange}
          value={value}
          name={name}
          placeholder={placeholder}
        />
      );
    default:
      return <div>Not input type specified</div>;
  }
}
