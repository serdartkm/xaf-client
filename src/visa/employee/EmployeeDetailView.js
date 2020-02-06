import React from 'react';
import DetailView from '../../library/DitailView';
import employeeMeta from './employeeMeta';
import PassportListView from '../passport/PassportListView';

export default function EmployeeDetailView({ employee, passports }) {
  return (
    <div>
      <DetailView meta={employeeMeta} object={employee} />
      <PassportListView collection={passports} />
    </div>
  );
}
