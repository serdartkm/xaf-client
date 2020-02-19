import reducer from '../reducer';
import actionTypes from '../actionTypes';
describe('list reducer', () => {
  it('should return initial state', () => {
    expect(reducer()(undefined, {})).toEqual({
      list: [],
      objectName: null,
      currentObject: null,
      propMetas: [],
      propNames: [],
      finding: false,
      error: null
    });
  });

  it('should handle FINDING', () => {
    expect(
      reducer()(
        {
          list: [],
          finding: false,
          currentObject: null,
          objectName: null,
          propNames: [],
          propMetas: [],
          error: null
        },
        { type: actionTypes.FINDING }
      )
    ).toEqual({
      list: [],
      objectName: null,
      currentObject: null,
      propMetas: [],
      propNames: [],
      finding: true,
      error: null
    });
  });

  it('should handle FINDING_FULFILLED', () => {
    expect(
      reducer()(
        {
          list: [],
          finding: false,
          currentObject: null,
          objectName: null,
          propNames: [],
          propMetas: [],
          error: null
        },
        { type: actionTypes.FINDING_FULFILLED, payload: { result: ['mylist'] } }
      )
    ).toEqual({
      list: ['mylist'],
      objectName: null,
      currentObject: null,
      propMetas: [],
      propNames: [],
      finding: false,
      error: null
    });
  });
  it('should handle FINDING_FAILED', () => {
    expect(
      reducer()(
        {
          list: [],
          finding: false,
          currentObject: null,
          objectName: null,
          propNames: [],
          propMetas: [],
          error: null
        },
        { type: actionTypes.FINDING_FAILED, error: 'this is and error' }
      )
    ).toEqual({
      list: [],
      objectName: null,
      currentObject: null,
      propMetas: [],
      propNames: [],
      finding: false,
      error: 'this is and error'
    });
  });
});
