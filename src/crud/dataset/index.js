import React from 'react';
import ToolBox from './toolbox/ToolBox';
import DataSetContainer from './DataSetContainer';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <ToolBox />
      </div>
      <div style={{ flex: 9 }}>
        <DataSetContainer />
      </div>
    </div>
  );
}
