import reducer from '../reducer';
import { initState } from '../reducer';
import actionTypes from '../actionTypes';
describe('Reducer', () => {
  it('handles VALUE_CHANGE action', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.VALUE_CHANGED,
        payload: {
          propName: 'firstName',
          value: 'dragos'
        }
      })
    ).toEqual({
      ...initState,
      obj: { ...initState.obj, firstName: 'dragos' }
    });
  });

  it('handles FINDING_STARTED', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.FINDING_STARTED
      })
    ).toEqual({ ...initState, loading: true });
  });

  it('handles FINDING_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.FINDING_SUCCESS,
        payload: { data: ['one', 'two'] }
      })
    ).toEqual({
      ...initState,
      loading: false,
      success: true,
      list: ['one', 'two']
    });
  });

  it('handles FINDING_FAILED', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.FINDING_FAILED,
        payload: { error: 'error happened' }
      })
    ).toEqual({ ...initState, error: 'error happened' });
  });

  it('handles INSERT_ONE_STARTED', () => {
    expect(
      reducer(undefined, { type: actionTypes.INSERT_ONE_STARTED })
    ).toEqual({ ...initState, loading: true });
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
        type: actionTypes.UPDATE_ONE_SUCCESS,
        payload: { _id: '1' }
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
        type: actionTypes.DELETE_ONE_STARTED,
        payload: { _id: '1' }
      })
    ).toEqual({ ...currentState, loading: true });
  });

  it('handles DELETE_ONE_SUCCESS', () => {
    const currentState = {
      ...initState,
      loading: true,
      list: [
        { _id: '1', firstName: 'drago', lastName: 'mario' },
        { _id: '2', firstName: 'mergen', lastName: 'mergenov' }
      ]
    };

    expect(
      reducer(currentState, {
        type: actionTypes.DELETE_ONE_SUCCESS,
        payload: { _id: '1' }
      })
    ).toEqual({
      ...currentState,
      loading: false,
      list: [{ _id: '2', firstName: 'mergen', lastName: 'mergenov' }]
    });
  });

  it('handles DELETE_ONE_FAILED', () => {
    const currentState = {
      ...initState,
      loading: true,
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
    ).toEqual({ ...currentState, loading: false, error: 'error happened' });
  });

  it('handles CREATE_OBJECT', () => {
    const object = { firstName: '', lastName: '' };
    expect(
      reducer(undefined, {
        type: actionTypes.CREATE_OBJECT,
        payload: { obj: object }
      })
    ).toEqual({ ...initState, obj: object });
  });
});
