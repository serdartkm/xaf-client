import { createObjectClicked } from '../detail-ui-action';
import detailUiActionTypes from '../detail-ui-actionTypes';
import mockMetaData from '../../../mock-data/mockMetaData';

describe('uiActions', () => {
  it.only('handles NAVIGATION_CHANGED action', () => {
    const expectedActions = {
      type: detailUiActionTypes.CREATE_OBJECT_CLICKED,
      payload: {
        fieldMetaData: [
          { name: 'firstName', placeholder: 'Enter firstname', type: 'text' },
          { name: 'lastName', placeholder: 'Enter lastname', type: 'text' },
          { name: 'birthDate', type: 'date' },
          {
            name: 'birthPlace',
            placeholder: 'Enter place of birth',
            type: 'text'
          }
        ],
        object: { firstName: '', lastName: '', birthPlace: '', birthDate: '' }
      }
    };
    expect(
      createObjectClicked({ objectName: 'employee', metaData: mockMetaData })
    ).toEqual(expectedActions);
  });
});
