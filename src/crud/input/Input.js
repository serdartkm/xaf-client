import React from 'react';

import Dropdown from './dropdown/dropdown';
import './css/style.css';

export default function Input({
  type,
  onChange,
  value = '',
  placeholder,
  name,
  source,
  items = [
    { id: 1, label: 'One' },
    { id: 2, label: 'Two' }
  ]
}) {


 

  switch (type) {
    case 'text':
      return (
        <div className='input-container'>
          <label htmlFor={name}>{name}:</label>
          <input
            id={name}
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
        <div className='input-container'>
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
        <div className='input-container'>
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
        <div className='input-container'>
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
        <div className='input-container'>
          <label htmlFor={name}>{name}:</label>
          <input
            id={name}
            data-testid={name}
            className='input'
            type='date'
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      );
    case 'bool':
      return (
        <div className='input-container'>
          <label htmlFor={name}>{name}:</label>
          <input
            data-testid={name}
            className='input'
            type='checkbox'
            onChange={onChange}
            checked={value}
            name={name}
            id={name}
          />

          <br></br>
        </div>
      );

    case 'radio':
      return items.map(i => (
        <div key={i.id} className='input-container'>
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

    case 'id':
      return (
        <div className='input-container'>
          <label htmlFor={name}>{name}:</label>
          <Dropdown name={name} source={source} />
        </div>
      );
    case 'search':
      return (
        <div className='input-container'>
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
