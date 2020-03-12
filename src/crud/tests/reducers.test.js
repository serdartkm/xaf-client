import createObjectHelper from '../createObjectHelper';
import mockData from '../mock-data/mockMetaData';
import getFieldsMetaData from '../getFieldsMetaData';
import reducer from '../reducer';
import { initState } from '../reducer';
import actionTypes from '../actionTypes';
import mockMetaData from '../mock-data/mockMetaData';
import getPropNames from '../getPropNames';
const propNames = getPropNames({
  metaData: mockMetaData,
  objectName: 'employee'
});
const obj = createObjectHelper({
  metaData: mockData,
  objectName: 'employee'
});
const fields = getFieldsMetaData({
  metaData: mockData,
  objectName: 'employee'
});
describe('Reducer', () => {
  it('handles VALUE_CHANGE action', () => {
    expect(
      reducer(initState, {
        type: actionTypes.VALUE_CHANGED,
        payload: {
          propName: 'firstName',
          value: 'dragos'
        }
      })
    ).toStrictEqual({ ...initState, obj: { firstName: 'dragos' } });
  });
  //
  it('handles FINDING_STARTED', () => {
    expect(
      reducer(initState, {
        type: actionTypes.FINDING_STARTED,
        payload: { propNames, metaData: mockMetaData, objectName: 'employee' }
      })
    ).toStrictEqual({
      ...initState,
      loading: true,
      metaData: mockMetaData,
      propNames,
      objectName: 'employee'
    });
  });

  it('handles FINDING_SUCCESS', () => {
    const currentState = { ...initState, loading: true };
    expect(
      reducer(currentState, {
        type: actionTypes.FINDING_SUCCESS,
        payload: { data: ['one', 'two'] }
      })
    ).toStrictEqual({
      ...initState,
      loading: false,
      success: true,
      list: ['one', 'two']
    });
  });

  it('handles FINDING_FAILED', () => {
    const currentState = { ...initState, loading: true };
    expect(
      reducer(currentState, {
        type: actionTypes.FINDING_FAILED,
        payload: { error: 'error happened' }
      })
    ).toStrictEqual({
      ...currentState,
      loading: false,
      error: 'error happened'
    });
  });

  it('handles INSERT_ONE_STARTED', () => {
    expect(
      reducer(initState, { type: actionTypes.INSERT_ONE_STARTED })
    ).toStrictEqual({ ...initState, loading: true });
  });

  it('handles INSERT_ONE_SUCCESS', () => {
    const nextState = {
      ...initState,
      obj: { firstName: 'dragos', lastName: 'mario' }
    };
    expect(
      reducer(nextState, {
        type: actionTypes.INSERT_ONE_SUCCESS,
        payload: { _id: '1' }
      })
    ).toEqual({
      ...nextState,
      list: [{ _id: '1', firstName: 'dragos', lastName: 'mario' }]
    });
  });

  it('handles INSERT_ONE_FAILED', () => {
    const nextState = {
      ...initState,
      loading: true
    };
    expect(
      reducer(nextState, {
        type: actionTypes.INSERT_ONE_FAILED,
        payload: { error: 'error happened' }
      })
    ).toEqual({ ...nextState, error: 'error happened', loading: false });
  });
  it('handles UPDATE_ONE_STARTED', () => {
    const currentState = {
      ...initState,
      obj: { _id: '1', firstName: 'dragos', lastName: 'mario' },
      list: [
        { _id: '1', firstName: 'drago', lastName: 'mario' },
        { _id: '2', firstName: 'mergen', lastName: 'mergenov' }
      ]
    };

    expect(
      reducer(currentState, {
        type: actionTypes.UPDATE_ONE_STARTED,
        payload: { type: actionTypes.UPDATE_ONE_STARTED }
      })
    ).toEqual({ ...currentState, loading: true });
  });

  it('handles UPDATE_ONE_SUCCESS', () => {
    const currentState = {
      ...initState,
      obj: { _id: '1', firstName: 'dragos', lastName: 'mario' },
      list: [
        { _id: '1', firstName: 'drago', lastName: 'mario' },
        { _id: '2', firstName: 'mergen', lastName: 'mergenov' }
      ]
    };

    expect(
      reducer(currentState, {
        type: actionTypes.UPDATE_ONE_SUCCESS
      })
    ).toEqual({
      ...currentState,
      loading: false,
      success: true,
      list: [
        { _id: '1', firstName: 'dragos', lastName: 'mario' },
        { _id: '2', firstName: 'mergen', lastName: 'mergenov' }
      ]
    });
  });

  it('handles UPDATE_ONE_FAILED', () => {
    const currentState = {
      ...initState,
      obj: { _id: '1', firstName: 'dragos', lastName: 'mario' },
      list: [
        { _id: '1', firstName: 'drago', lastName: 'mario' },
        { _id: '2', firstName: 'mergen', lastName: 'mergenov' }
      ],
      loading: true
    };
    expect(
      reducer(currentState, {
        type: actionTypes.UPDATE_ONE_FAILED,
        payload: { error: 'error happened' }
      })
    ).toEqual({ ...currentState, loading: false, error: 'error happened' });
  });

  it('handles DELETE_ONE_STARTED', () => {
    const currentState = {
      ...initState,
      list: [
        { _id: '1', firstName: 'drago', lastName: 'mario' },
        { _id: '2', firstName: 'mergen', lastName: 'mergenov' }
      ]
    };

    expect(
      reducer(currentState, {
        type: actionTypes.DELETE_ONE_STARTED
      })
    ).toEqual({ ...currentState, loading: true });
  });

  it('handles DELETE_ONE_SUCCESS', () => {
    const currentState = {
      ...initState,
      loading: true,
      obj: { _id: '1', firstName: 'drago', lastName: 'mario' },
      list: [
        { _id: '1', firstName: 'drago', lastName: 'mario' },
        { _id: '2', firstName: 'mergen', lastName: 'mergenov' }
      ]
    };

    expect(
      reducer(currentState, {
        type: actionTypes.DELETE_ONE_SUCCESS
      })
    ).toStrictEqual({
      ...currentState,
      loading: false,
      list: [{ _id: '2', firstName: 'mergen', lastName: 'mergenov' }]
    });
  });

  it('handles DELETE_ONE_FAILED', () => {
    const currentState = {
      ...initState,
      loading: true,
      obj: { _id: '1', firstName: 'drago', lastName: 'mario' },
      list: [
        { _id: '1', firstName: 'drago', lastName: 'mario' },
        { _id: '2', firstName: 'mergen', lastName: 'mergenov' }
      ]
    };

    expect(
      reducer(currentState, {
        type: actionTypes.DELETE_ONE_FAILED,
        payload: { error: 'error happened' }
      })
    ).toStrictEqual({ ...currentState, loading: false, error: 'error happened' });
  });

  it('handles OBJECT SELECTED', () => {
   const  obj= { _id: '1', firstName: 'drago', lastName: 'mario' }
    expect(
      reducer(initState, {
        type: actionTypes.OBJECT_SELECTED,
        payload: { obj, fields }
      })
    ).toStrictEqual({...initState, obj, fields });
  });
  it('handle OBJECT CREATED', () => {
    expect(
      reducer(initState, {
        type: actionTypes.OBJECT_CREATED,
        payload: { obj, fields }
      })
    ).toStrictEqual({...initState, obj, fields });
  });
});
