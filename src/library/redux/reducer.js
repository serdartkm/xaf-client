import actionTypes from './actionTypes';

export default function reducer(docState) {
  const initState = {
    ...docState,
    saving: false,
    finding: false,
    deleting: false
  };
  return (state = initState, action) => {
  
    let objectName = null;
    let prevCollection = null;
    let _id = null;
    if (action && action.payload && action.payload.objectName) {
      objectName = action.payload.objectName;
      prevCollection = state[objectName].collection;
      debugger;
      if (action.payload.result && action.payload.result._id) {
        _id = action.payload.result._id;
      }

    
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
      case actionTypes.DELETING_ONE:
        return { ...state, deleting: true };
      case actionTypes.DELETING_ONE_FULFILLED:
        nextState = {
          ...state,
          deleting: false,
          [objectName]: {
            collection: [...prevCollection.filter(f => f._id !== _id)]
          }
        };
        debugger;
        return { ...nextState };
      case actionTypes.DELETING_ONE_FAILED:
        return { ...state, deleting: false };
      case actionTypes.UPDATING_ONE:
        return { ...state, saving: true };
      case actionTypes.UPDATING_ONE_FULFILLED:
        debugger;
        const updatedCollection = prevCollection.map(p => {
          if (p._id === _id) {
            return state[objectName];
          } else {
            return p;
          }
        });
        nextState = {
          ...state,
          saving: false,
          [objectName]: {
            ...state[objectName],
            collection: updatedCollection
          }
        };
        debugger;
        return { ...nextState };
      case actionTypes.UPDATING_ONE_FAILED:
        return { ...state, saving: false };
      default:
        return state;
    }
  };
}
