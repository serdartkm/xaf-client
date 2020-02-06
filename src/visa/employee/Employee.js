import React from 'react';
import useEmployee from './useEmployee';
import EmployeeDetailView from './EmployeeDetailView';

export default function Employee() {
  const { employee, passports } = useEmployee();
  return (
    <div>
      <EmployeeDetailView employee={employee} passports={passports} />
    </div>
  );
}
