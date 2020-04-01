import React from 'react';

import Droppable from './dnd/Droppable';

const style = {
  root: {
    backgroundColor: '#26a69a',
    width: 200,
    margin: 5,
    border: 'solid 1px black'
  },
  dropZone: {
    backgroundColor: '#52c7b8',
    padding: 20
  }
};

export default function DataSet({ object }) {
  return (
    <div style={style.root}>
      <div>{object.name}</div>
      <Droppable />
    </div>
  );
}
