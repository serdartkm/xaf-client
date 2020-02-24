import uiReducer from '../uiReducer';
import uiActionTypes from '../uiActionTypes';
describe('uiReducer', () => {
  it('handles NAVIGATION_CHANGED action', () => {

    const initState = {
      propNames: [],
      objectName: null,
      objectNames: [],
      metaData: null
    };
    expect(
      uiReducer(initState, {
        type: uiActionTypes.NAVIGATION_CHANGED,
        objectName: 'employee',
        propNames: ['firstName', 'lastName']
      })
    ).toEqual({...initState, objectName: 'employee', propNames: ['firstName', 'lastName'] });
  });
});
