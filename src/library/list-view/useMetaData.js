import  { useEffect, useState } from 'react';

export default function useMetaData(props) {
  const [columnNames, setColumnNames] = useState([]);
  useEffect(() => {
    if (props.meta) {
      setColumnNames(Object.keys(props.meta[1]));
    }
  }, [props.meta]);

  return { columnNames };
}
