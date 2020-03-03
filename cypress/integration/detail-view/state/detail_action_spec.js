import { valueChanged } from '../../../../src/library/redux/detail-reducer/detailActions';
import actionTypes from '../../../../src/library/redux/detail-reducer/detailActionTypes';
describe('detail actions', () => {
  it('handles VALUE_CHANGED action type', () => {
    const expectedAction = {
      type: actionTypes.VALUE_CHANGED,
      payload: { propName: 'firstName', value: 'dragos' }
    };

    expect(valueChanged({ propName: 'firstName', value: 'dragos' })).deep.equal(
      expectedAction
    );
  });
  it('handles INSERTING_ONE action type', () => {});
  it('handles INSERTING_ONE_FULFILLED action type', () => {});
  it('handles INSERTING_ONE_FAILED action type', () => {});
  it('handles UPDATING_ONE action type', () => {});
  it('handles UPDATING_ONE_FULFILLED action type', () => {});
  it('handles UPDATING_ONE_FAILED action type', () => {});
  it('handles DELETING_ONE action type', () => {});
  it('handles DELETING_ONE_FULFILLED action type', () => {});
  it('handles DELETING_ONE_FAILED action type', () => {});
});
