import React, { useEffect } from 'react';
import useMetaData from './useMetaData';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import {
  find,
  deleteOne,
  addNewDocument,
  documentSelected
} from '../redux/actions';
import useListState from './useListState';

import { Link } from 'react-router-dom';
import './css/style.css';

export default function ListView(props) {
  const { columnNames } = useMetaData(props);
  const { find, objectName, state, reduxState } = useListState();

  useEffect(() => {
    if (reduxState) {
      debugger;
    }
  }, [reduxState]);

  function handleDelete(_id) {
    const body = { _id };
    //  dispatch(deleteOne({ objectName, body }));
  }

  function handleDocSelected(doc) {
    //dispatch(documentSelected({ objectName, doc }));
  }

  function addNewDoc() {
    // dispatch(addNewDocument({ objectName }));
  }

  useEffect(() => {
    if (columnNames.length > 0 && objectName) {
      debugger;
      find();
    }
  }, [columnNames, objectName]);
  return (
    <div className='list-view'>
      <Link to={`/edit/${objectName}`} onClick={addNewDoc}>
        Add new
      </Link>
      {objectName}
      <div className='table'>
        <TableHeader columnNames={columnNames} />

        <TableBody
         
          handleDelete={handleDelete}
          handleDocSelected={handleDocSelected}
        />
      </div>
    </div>
  );
}
