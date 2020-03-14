import { useState } from 'react';
export default function useFetch() {
  const [objects, setObjects] = useState([]);
  const [error, setError] = useState(null);
  function updateDate() {}

  function getObjects() {
    fetch('http://localhost:3004/objects')
      .then(response => response.json())
      .then(data => setObjects(data))
      .catch(err => setError(err));
  }

  return { updateDate, objects, getObjects, error };
}
