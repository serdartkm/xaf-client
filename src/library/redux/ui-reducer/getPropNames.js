export default function getPropNames({ objectName, metaData }) {
  const object = metaData.find(m => objectName === m.objectName);
  const propNames = object.propNames.reduce((prevValue, currentValue, i) => {
  
    if (i === 1) {
 
      return [prevValue.name,currentValue.name];
    } else {
    
    return  [...prevValue, currentValue.name];
    }
  });
 
  return propNames;
}
