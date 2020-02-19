export default function getMetaData({ metaData }) {
  const mappedObjectArray = Object.entries(metaData).map(m => {
    const objectName = m[0];
    const fields = Object.keys(m[1]).filter(f => f !== 'collections');

    return {
      [objectName]:
        fields.length === 1
          ? { [fields[0]]: '' }
          : fields.reduce((o, key, i) => {
              if (i === 1) {
                let obj = { [o]: '', [key]: '' };

                return obj;
              } else {
                let obj = { ...o, [key]: '' };

                return obj;
              }
            })
    };
  });

  const mappedObject = mappedObjectArray.reduce((acc, currval) => {
    return { ...acc, ...currval };
  });

  return mappedObject;
}
