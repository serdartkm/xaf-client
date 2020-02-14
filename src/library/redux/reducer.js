import actionTypes from './actionTypes';

export default function reducer(docState) {
  const initState = {
    ...docState,
    saving: false,
    finding: false
  };
  return (state = initState, action) => {
    let nextState = {};
    switch (action.type) {
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
        //   const insertedObject = action.payload.rusult.opt
        //  const collection = state[action.objectName].co
        return { ...state, saving: false };
      case actionTypes.INSERTING_ONE_FAILED:
        return { ...state, saving: false };
      default:
        return state;
    }
  };
}
