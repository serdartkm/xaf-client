import uiReducer from '../uiReducer';
import uiActionTypes from '../uiActionTypes';
describe('uiReducer', () => {
  it('handles NAVIGATION_CHANGED action', () => {
    expect(
      uiReducer(undefined, {
        type: uiActionTypes.NAVIGATION_CHANGED,
        objectName: 'employee',
        propNames: ['firstName', 'lastName']
      })
    ).toEqual({ objectName: 'employee', propNames: ['firstName', 'lastName'] });
  });
});
