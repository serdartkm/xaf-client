import React from 'react';
import mockMetaData from '../mock-data/mockMetaData';
import { BrowserRouter } from 'react-router-dom';
import CrudApplicaion from '../../crud/CrudApplication';
export default function App({ metaData }) {
  return (
    <BrowserRouter>
      <CrudApplicaion />
    </BrowserRouter>
  );
}
