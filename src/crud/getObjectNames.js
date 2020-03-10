
export default function getObjectNames({ metaData }) {
  if (metaData) return Object.values(metaData).map(o => o.objectName);
  return [];
}
