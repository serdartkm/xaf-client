import { useReducer } from 'react';
import reducer, { initState } from './reducer';
import * as actions from './actions';

export default function useCrud({ metaData }) {
  const [state, dispatch] = useReducer(reducer, initState);

  function handleChange(e) {
    const { value, name } = e.target;
    dispatch(actions.valueChanged({ propName: name, value }));
  }

  function insertOne() {
    const { obj, objectName } = state;

    dispatch(actions.insertOne({ objectName, dispatch, object: obj }));
  }

  function find({ objectName }) {
    dispatch(actions.find({ objectName, dispatch, metaData }));
  }

  function updateOne() {
    const { objectName, obj } = state;
    dispatch(actions.updateOne({ objectName, dispatch, object: obj }));
  }

  function deleteOne() {
    const {
      objectName,
      obj: { _id }
    } = state;
    dispatch(actions.deleteOne({ objectName, dispatch, _id }));
  }
  function createObject({ objectName }) {
    if (objectName) {
      dispatch(actions.createObject({ objectName, dispatch, metaData }));
    }
    debugger;
  }
  function selectObject({ objectName, obj }) {
    const { metaData } = state;
    dispatch(actions.selectObject({ objectName, dispatch, metaData, obj }));
  }

  return {
    insertOne,
    handleChange,
    state,
    updateOne,
    deleteOne,
    createObject,   
    selectObject,
    find
  };
}
