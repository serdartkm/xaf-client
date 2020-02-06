import { useState, useEffect } from 'react';

export default function useFetch() {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  function getAsJSON() {}

  function postAsJSON() {}

  function putAsJSON() {}

  function deletAsJSON() {}
  return { getAsJSON, putAsJSON, deletAsJSON, postAsJSON, data, fetchError };
}
