import { useEffect } from 'react';
import useCrud from './useCrud';

export default function CrudProvider({ children, objectName }) {
  const {
    insertOne,
    handleChange,
    find,
    state,
    updateOne,
    deleteOne,
    createObject,
    selectObject
  } = useCrud({ objectName });

  useEffect(() => {
    if (objectName) {
      find();
    }
  }, [objectName]);

  return children({
    insertOne,
    handleChange,
    find,
    state,
    updateOne,
    deleteOne,
    createObject,
    selectObject
  });
}
