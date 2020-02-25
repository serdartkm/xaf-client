import { valueChanged, createObject } from '../detailActions';
import createObjectHelper from '../../detail-ui-reducer/createObjectHelper';
import mockData from '../../../mock-data/mockMetaData';
import actionTypes from '../detailActionTypes';
jest.mock('../../store');
describe('detailActions', () => {
  it('valueChanged Action returns correct action', () => {
    const expectedAction = {
      type: actionTypes.VALUE_CHANGED,
      payload: { propName: 'firstName', value: 'dragos' }
    };

    expect(valueChanged({ propName: 'firstName', value: 'dragos' })).toEqual(
      expectedAction
    );
  });

  it('createObjectAction Action returns correct action', () => {
    const expectedAction = {
      type: actionTypes.CREATED_OBJECT,
      payload: {
        object: createObjectHelper({
          objectName: 'employee',
          metaData: mockData
        })
      }
    };

    expect(createObject({ objectName: 'employee' })).toEqual(expectedAction);
  });
});
