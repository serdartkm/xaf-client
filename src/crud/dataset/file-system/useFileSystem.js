import { useState } from 'react';
export default function useFileSystem() {
  const [filesystem, setFileSystem] = useState(null);
  const [errors, setErrors] = useState([]);

  function errorHandler(err) {
    setErrors(prev => [...prev, err]);
  }

  function onInitFs(fs) {
    setFileSystem(fs);
  }

  function usePersistentStoreage() {
    window.webkitStorageInfo.requestQuota(
      window.PERSISTENT,
      1024 * 1024,
      function(grantedBytes) {
        window.requestFileSystem(
          window.PERSISTENT,
          grantedBytes,
          onInitFs,
          errorHandler
        );
      },
      function(err) {
        setErrors(prev => [...prev, err]);
      }
    );
  }

  function getCurrentQuotaUsaga() {
    window.webkitStorageInfo.queryUsageAndQuota();
  }
  return { usePersistentStoreage, filesystem, errors, getCurrentQuotaUsaga };
}
