import React, { useState } from 'react';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from 'jodit-react';

export default function TextEditor() {
  const [content, setContent] = useState('FirstContent');
  return <JoditEditor value={content} onChange={e => setContent(e)} />;
}
