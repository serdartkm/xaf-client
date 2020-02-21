export default function getFieldsMetaData({metaData,objectName}){
    const object = metaData.find(m => objectName === m.objectName);
    return object.propNames
}