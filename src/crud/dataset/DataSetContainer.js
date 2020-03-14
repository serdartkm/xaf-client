import React, { useEffect } from 'react';
import useFetch from './useFetch';
import DataSet from './DataSet';
import Droppable from './dnd/Droppable';
import requestLocFileSystem from './file-system/file-system'
export default function DataSetContainer() {
  const { objects, getObjects } = useFetch();

  useEffect(() => {
    requestLocFileSystem()
    getObjects();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#b2dfdb',
        height: '85vh'
      }}
    >
      <h5
        style={{
          backgroundColor: '#82ada9',
          textAlign: 'center',
          marginTop: 0,
          height: 50,
          lineHeight: 3
        }}
      >
        DataSets
      </h5>
      <div style={{ flex: 10 }}>
        <Droppable>
          {objects.map(t => {
            return <DataSet object={t} key={t.name} />;
          })}
        </Droppable>
      </div>
    </div>
  );
}
