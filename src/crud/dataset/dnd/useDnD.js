import { useState } from 'react';
export default function useDnD({ toolName }) {
  const [tool, setTool] = useState(null);
  function dragStart(ev) {
    ev.dataTransfer.dropEffect = 'copy';
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData('text/plain', toolName);
  }

  function dragOver(ev) {
    ev.preventDefault();

    ev.dataTransfer.dropEffect = 'move';
  }
  function drop(ev) {
    ev.preventDefault();

    setTool(ev.dataTransfer.getData('text/plain'));
  }
  return { dragStart, dragOver, drop, tool };
}
