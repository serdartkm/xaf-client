import React from 'react';
import useDnD from './useDnD';

export default function Droppable({ children }) {
  const { drop, dragOver, tool } = useDnD({ toolName: '' });

  return (
    <div onDrop={drop} onDragOver={dragOver}>
      {children}
    </div>
  );
}
