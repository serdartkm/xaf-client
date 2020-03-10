import { useReducer } from 'react';
import reducer, { initState } from './reducer';
import * as actions from './actions';

export default function useCrud({ objectName }) {
  const [state, dispatch] = useReducer(reducer, { ...initState, objectName });

  function handleChange(e) {
    const { value, name } = e.target;
    dispatch(actions.valueChanged({ propName: name, value }));
  }

  function insertOne() {
    const { obj, objectName } = state;

    dispatch(actions.insertOne({ objectName, dispatch, object: obj }));
  }

  function find() {
    const { objectName } = state;
    dispatch(actions.find({ objectName, dispatch }));
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
    const { dispatch, metaData } = state;
    dispatch(actions.createObject({ objectName, dispatch, metaData }));
  }
  function selectObject({ objectName, obj }) {
    const { dispatch, metaData } = state;
    dispatch(actions.selectObject({ objectName, dispatch, metaData, obj }));
  }

  return {
    insertOne,
    handleChange,
    find,
    state,
    updateOne,
    deleteOne,
    createObject,
    selectObject
  };
}
