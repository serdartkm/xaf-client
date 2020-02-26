import detailUiReducer from '../detail-ui-reducer';
import actionTypes from '../detail-ui-actionTypes';

describe('DetailUiReducer', () => {
  it('returns correct fieldMetaData ', () => {
    const object = { firstName: '' };
    const fieldMetaData = [{ name: 'firstName' }];
    expect(
      detailUiReducer(undefined, {
        type: actionTypes.CREATE_OBJECT_CLICKED,
        payload: { object, fieldMetaData }
      })
    ).toEqual({ fieldMetaData });
  });

  it.todo('DetailUiReducer  handles CLOSE_DETAIL_VIEW_CLICKED action ');
});
