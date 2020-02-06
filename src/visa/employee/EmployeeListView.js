import React from 'react';
import ListView from '../../library/ListView';
import employee from './employeeMeta';
export default function EmployeeListView({ employees }) {
  return (
    <div>
      <ListView object={employee} collection={employees} />
    </div>
  );
}
