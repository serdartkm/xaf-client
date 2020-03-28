import actionTypes from './actionTypes';
export const initState = {
  obj: {},
  objectName: null,
  objNames: [],
  list: [],
  lookup: [],
  fields: [],
  success: false,
  loading: false,
  error: null,
  propNames: [],
  metaData: null
};
export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.VALUE_CHANGED:
      return {
        ...state,
        obj: {
          ...state.obj,
          [action.payload.propName]: action.payload.value
        }
      };
    case actionTypes.FINDING_STARTED:
      return {
        ...state,
        loading: true,
        propNames: action.payload.propNames,
        objectName: action.payload.objectName,
        metaData: action.payload.metaData
      };
    case actionTypes.FINDING_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        list: action.payload.data
      };
    case actionTypes.FINDING_FAILED:
      return { ...state, loading: false, error: action.payload.error };

    case actionTypes.INSERT_ONE_STARTED:
      return { ...state, loading: true };
    case actionTypes.INSERT_ONE_SUCCESS:
      return {
        ...state,
        list: [...state.list, { _id: action.payload._id, ...state.obj }]
      };
    case actionTypes.INSERT_ONE_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case actionTypes.UPDATE_ONE_STARTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_ONE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        list: state.list.map(l => {
          if (l._id === state.obj._id) {
            return state.obj;
          } else {
            return l;
          }
        })
      };

    case actionTypes.UPDATE_ONE_FAILED: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case actionTypes.DELETE_ONE_STARTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_ONE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter(l => l._id !== state.obj._id)
      };

    case actionTypes.DELETE_ONE_FAILED:
      return { ...state, loading: false, error: action.payload.error };

    case actionTypes.OBJECT_CREATED:
      return {
        ...state,
        obj: action.payload.obj,
        fields: action.payload.fields
      };
    case actionTypes.OBJECT_SELECTED:
      return {
        ...state,
        obj: action.payload.obj,
        fields: action.payload.fields
      };

    case actionTypes.DATALIST_STARTED:
      return {
        ...state,
        loading: true
      };
    case actionTypes.DATALIST_SUCCESS:
      return {
        ...state,
        loading: false,
        datalist: { ...state.datalist, [action.propName]: action.data }
      };
    default:
      return state;
  }
}
