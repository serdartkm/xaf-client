import detailReducer from '../detailReducer';
import detailUiActionType from '../../detail-ui-reducer/detail-ui-actionTypes';
import detailActionTypes from '../detailActionTypes';
describe('DetailReducer', () => {
  it('handles CREATE_OBJECT_CLICKED action', () => {
    const object = { firstName: '', lastName: '' };
    expect(
      detailReducer(undefined, {
        type: detailUiActionType.CREATE_OBJECT_CLICKED,
        payload: { object }
      })
    ).toEqual(object);
  });

  it('handles VALUE_CHANGED action', () => {
    const initState = { firstName: '', lastName: '' };
    expect(
      detailReducer(initState, {
        type: detailActionTypes.VALUE_CHANGED,
        payload: { propName: 'firstName', value: 'dragos' }
      })
    ).toEqual({ firstName: 'dragos', lastName: '' });
  });
});


