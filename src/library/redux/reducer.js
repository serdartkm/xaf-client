import actionTypes from './actionTypes';

export default function reducer(docState) {
  const initState = {
    ...docState,
    saving: false,
    finding: false
  };
  return (state = initState, action) => {
    debugger;
    let objectName = null;
    if (action && action.payload && action.payload.objectName) {
      objectName = action.payload.objectName;
    }

    let nextState = {};
    switch (action.type) {
      case actionTypes.DOCUMENT_SELECTED:
        nextState = {
          ...state,
          [action.payload.objectName]: action.payload.doc
        };
        debugger;
        return { ...nextState };
      case actionTypes.VALUE_CHANGED:
        nextState = {
          ...state,
          [action.payload.objectName]: {
            ...state[action.payload.objectName],
            [action.payload.propName]: action.payload.value
          }
        };

        return nextState;
      case actionTypes.FINDING:
        return { ...state, finding: true };
      case actionTypes.FINDING_FULFILLED:
        debugger;
        const foundCollection = action.payload.result;
        nextState = {
          ...state,
          finding: false,
          [action.payload.objectName]: {
            ...state[action.payload.objectName],
            collection: foundCollection
          }
        };

        debugger;
        return { ...nextState };
      case actionTypes.FINDING_FAILED:
        return { ...state, finding: false };
      case actionTypes.INSERTING_ONE:
        return { ...state, saving: true };
      case actionTypes.INSERTING_ONE_FULFILLED:
        const prevCollection = state[objectName].collection;
        const insertedObject = { ...action.payload.result.ops[0] };
        const insertedId = action.payload.result.insertedId;
        debugger;
        nextState = {
          ...state,
          saving: false,
          [objectName]: {
            ...state[objectName],
            collection: [
              ...prevCollection,
              { _id: insertedId, ...insertedObject }
            ]
          }
        };
        debugger;
        return { ...nextState };
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
      default:
        return state;
    }
  };
}
