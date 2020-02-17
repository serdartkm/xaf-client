import actionTypes from './actionTypes';
export default function reducer(state, action) {
  let objectName = null;

  if (action && action.payload && action.payload.objectName) {
    objectName = action.payload.objectName;

  }

  let nextState = {};
  switch (action.type) {
    case actionTypes.VALUE_CHANGED:
      nextState = { ...state, [action.payload.propName]: action.payload.value };
      debugger;
      return nextState;
    case actionTypes.INSERTING_ONE:
      return { ...state, saving: true };

    case actionTypes.INSERTING_ONE_FAILED:
      return { ...state, saving: false };
    case actionTypes.ADD_NEW_DOCUMENT:
      const newObj = Object.keys(state[objectName]).filter(
        f => f !== 'collection'
      );
      debugger;
      nextState = {
        ...state,
        [objectName]: {
          ...newObj.reduce((o, key, i) => {
            if (i === 1) {
              let obj = { [o]: '', [key]: '' };

              return obj;
            } else {
              let obj = { ...o, [key]: '' };

              return obj;
            }
          }),
          collection: state[objectName].collection
        }
      };
      debugger;
      return { ...nextState };
      case actionTypes.UPDATING_ONE:
        return { ...state, saving: true };

      case actionTypes.UPDATING_ONE_FAILED:
        return { ...state, saving: false };
    default:
      return state;
  }
}
