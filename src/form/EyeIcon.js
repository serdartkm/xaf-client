import React, { useState } from 'react';
import openIcon from './icons/openEye.png';
import closeIcon from './icons/closeEye.png';
function IconState({ open }) {
  if (open) {
    return <img width="30px" src={openIcon} />;
  }
  return <img width="30px" src={closeIcon} />;
}

export default function EyeIcon({onClick}) {
  const [state, setState] = useState(false);
  function toggle() {
    onClick()
    setState(prev => !prev);
  }

  return (
    <div
      onClick={toggle}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        margin: 1
      }}
    >
      <IconState open={state} />
    </div>
  );
}
