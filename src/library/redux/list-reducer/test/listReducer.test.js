import actionType from '../listActionTypes';
import listReducer from '../listReducer';

describe('listReducer', () => {
  it('returns correct initState', () => {
    expect(listReducer(undefined, {})).toEqual({
      list: [],
      finding: false,
      error: null
    });
  });
  it('should handle FINDING_LIST action', () => {
    expect(listReducer(undefined, { type: actionType.FINDING_LIST })).toEqual({
      error: null,
      finding: true,
      list: []
    });
  });

  it('should handle FINDING_LIST_FULFILLED action', () => {
    expect(
      listReducer(undefined, {
        type: actionType.FINDING_LIST_FULFILLED,
        payload: { result: ['list found'] }
      })
    ).toEqual({ finding: false, list: ['list found'], error: null });
  });

  it('should handle FINDING_LIST_FAILED', () => {
    expect(
      listReducer(undefined, {
        type: actionType.FINDING_LIST_FAILED,
        error: 'Error happened'
      })
    ).toEqual({ finding: false, list: [], error: 'Error happened' });
  });
});
