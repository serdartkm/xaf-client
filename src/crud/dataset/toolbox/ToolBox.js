import React from 'react';
import Draggable from '../dnd/Draggable';

function ToolBoxInput({ title, toolName }) {
  return <Draggable title={title} toolName={toolName} />;
}

export default function ToolBox() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <h5 style={{ textAlign: 'center' }}>Toolbox</h5>
      <ToolBoxInput title='Text' toolName='text' />
      <ToolBoxInput title='Date' toolName='date' />
      <ToolBoxInput title='Number' toolName='number' />
      <ToolBoxInput title='Select' toolName='select' />
      <ToolBoxInput title='File' toolName='file' />
      <ToolBoxInput title='Image' toolName='image' />
      <ToolBoxInput title='Radio' toolName='radio' />
      <ToolBoxInput title='Checkbox' toolName='checkbox' />
      <ToolBoxInput title='Time' toolName='time' />
      <ToolBoxInput title='DataSet' toolName='data-set' />
    </div>
  );
}
