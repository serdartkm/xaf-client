import store from '../store';

export default function createObject({ objectName }) {
  const { metaData } = store.getState().ui;
  const propNames = metaData.find(m => objectName === m.objectName).propNames;
  const object = propNames.reduce((p, c, i) => {
    if (i === 1) {
      return { [p.name]: '', [c.name]: '' };
    } else {
      return { ...p, [c.name]: '' };
    }
  });
  return object;
}
