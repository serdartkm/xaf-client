import React from 'react';
import TextEditor from './text-editor/TextEditor'
import { Route } from 'react-router-dom';
export default function FileSystem() {
  return (
    <Route exact path='/filesystem/texteditor'>
      <TextEditor />
    </Route>
  );
}
