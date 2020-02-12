import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
const loggerMiddleware = createLogger();
export default function initStore(initialState) {
  const mappedObjectArray = Object.entries(initialState).map(m => {
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
  return createStore(
    reducer(mappedObject),
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  );
}
