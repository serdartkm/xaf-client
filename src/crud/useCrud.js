
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions';
export default function useCrud() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();




  function handleChange(e) {
    const { value, name } = e.target;


    dispatch(actions.valueChanged({ propName: name, value }));
  }

  function insertOne() {
    dispatch(actions.insertOne());
  }


  function find({ objectName, filter, metaData, listView }) {
    dispatch(actions.find({ objectName, metaData, filter, listView }));

  }

  function updateOne() {
    dispatch(actions.updateOne());
  }

  function deleteOne() {
    dispatch(actions.deleteOne());
  }
  function createObject() {


    dispatch(actions.createObject());
  }
  function selectObject() {
    dispatch(actions.selectObject());
  }

  return {
    insertOne,
    handleChange,
    state: state.crud,
    updateOne,
    deleteOne,
    createObject,
    selectObject,
    find
  };
}
