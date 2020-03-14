import React from 'react';
import useDnD from './useDnD';

const style = {
  input: {
    backgroundColor: '#b2dfdb',
    padding: 5,
    margin: 2,
    display: 'flex',
    justifyContent: 'center'
  }
};

export default function Draggable({ toolName, title }) {
  const { dragStart } = useDnD({ toolName });
  return (
    <div style={style.input} draggable='true' onDragStart={dragStart}>
      {title}
    </div>
  );
}
