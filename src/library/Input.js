import React from 'react';
import './css/style.css'
export default function Input({
  type,
  onClick,
  onChange,
  value,
  placeholder,
  name
}) {
  switch (type) {
    case 'text':
      return (
        <input
        className="input"
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
        className="input"
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
        className="input"
          type='password'
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );
    case 'file':
      return (
        <input     className="input" type='file' onChange={onChange} value={value} name={name} />
      );

    case 'date':
      return (
        <input     className="input" type='date' onChange={onChange} value={value} name={name} />
      );
    case 'checkbox':
      return (
        <input     className="input" type='checkbox' onChange={onChange} value={value} name={name} />
      );

    case 'radio':
      return (
        <input     className="input" type='radio' onChange={onChange} value={value} name={name} />
      );

    case 'search':
      return (
        <input
         className="input"
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
