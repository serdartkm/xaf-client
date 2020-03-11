import React, { useEffect, useState, useMemo } from 'react';
import Table from './Table';
import { Link, useParams } from 'react-router-dom';
import './css/style.css';
import DetailView from '../detail-view/DetailView';
import useCrud from '../useCrud';
export default function ListView({ metaData }) {
  const {
    insertOne,
    handleChange,
    state,
    updateOne,
    deleteOne,
    createObject,
    selectObject,
    find
  } = useCrud({ metaData });
  const [edit, setEdit] = useState(false);
  const params = useParams();
  const { objectName } = params;

  useEffect(() => {
    find({ objectName });
    setEdit(false);
  }, []);

  const handleCreateObject = useMemo(() => {
    createObject({ objectName });
    setEdit(true);
  });
  return (
    <div className='list-view'>
      <button onClick={handleCreateObject}>New Obj</button>
      {objectName}
      <div className='table'>
        <Table
          list={state && state.list}
          objectName={objectName}
          propNames={state && state.propNames}
        />
      </div>
      <dialog open={edit}>
        <DetailView />
      </dialog>
    </div>
  );
}
