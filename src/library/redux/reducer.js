import actionTypes from './actionTypes';

export default function reducer(docState) {
  const initState = {
    ...docState,
    list: [],
    finding: false,
    currentObject: null,
    objectName: null,
    propNames: [],
    propMetas: [],
    error: null
  };
  return (state = initState, action) => {
  
    let objectName = null;
    let prevCollection = null;
    let _id = null;
    objectName = state.objectName;

    let nextState = {};
    switch (action.type) {
      case actionTypes.FINDING: //tested
        nextState = {
          ...state,
          finding: true
        };
        return nextState;
      case actionTypes.FINDING_FULFILLED: //tested
        nextState = {
          ...state,
          list: action.payload.result
        };

        return nextState;
      case actionTypes.FINDING_FAILED: //tested
        nextState = {
          ...state,
          finding: false,
          error: action.error
        };

        return nextState;
      case actionTypes.UPDATING_ONE_FULFILLED:
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

        return { ...nextState };

      case actionTypes.DOCUMENT_SELECTED:
        nextState = {
          ...state,
          currentObject: { ...action.payload.doc },
          objectName: action.payload.objectName
        };
   
        return nextState;
      case actionTypes.INSERTING_ONE_FULFILLED:
        const insertedObject = { ...action.payload.result.ops[0] };
        const insertedId = action.payload.result.insertedId;
     
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
     
        return { ...nextState };
      case actionTypes.SELECTED_OBJECT_NAME:
        nextState = {
          ...state,
          objectName: action.payload.objectName,
          propNames: action.payload.propNames,
          propMetas: action.payload.propMetas
        };
    
        return nextState;
      default:
        return state;
    }
  };
}
