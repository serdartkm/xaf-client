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
        <div className="input-container">
          <input
            data-testid={name}
            className='input'
            type='text'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      );
    case 'email':
      return (
        <div className="input-container">
          <input
            data-testid={name}
            className='input'
            type='email'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      );
    case 'password':
      return (
        <div className="input-container">
          <input
            data-testid={name}
            className='input'
            type='password'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      );
    case 'file':
      return (
        <div className="input-container">
          <input
            data-testid={name}
            className='input'
            type='file'
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      );

    case 'date':
      return (
        <div className="input-container">
          <input
            data-testid={name}
            className='input'
            type='date'
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      );
    case 'checkbox':
      return (
        <div className="input-container">
          <input
            data-testid={name}
            className='input'
            type='checkbox'
            onChange={onChange}
            checked={value}
            name={name}
          />
        </div>
      );

    case 'radio':
      return items.map(i => (
        <div key={i.id} className="input-container">
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
        <div className="input-container">
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
        </div>
      );
    case 'search':
      return (
        <div className="input-container">
          <input
            data-testid={name}
            className='input'
            type='search'
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder}
          />
        </div>
      );
    default:
      return <div>Not input type specified</div>;
  }
}
