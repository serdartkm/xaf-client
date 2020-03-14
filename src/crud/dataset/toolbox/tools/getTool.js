import React from 'react';
import DateInput from './DateInput';
import TextInput from './TextInput';
import DataSet from '../../DataSet';
export default function getTools(tool) {
  switch (tool) {
    case 'text':
      return <TextInput />;
    case 'date':
      return <DateInput />;
    case 'data-set':
      return <DataSet />;
    default:
      return null;
  }
}
