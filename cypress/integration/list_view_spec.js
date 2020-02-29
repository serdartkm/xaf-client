import metaData from '../../src/library/mock-data/mockMetaData';

const initUiState = {
  propNames: ['firstName', 'lastName', 'birthDate', 'birthPlace'],
  objectName: 'employee',
  objectNames: ['employee', 'passport', 'visa'],
  metaData
};

const initListState = { list: [], finding: false, error: null };

const initDetailUiState = { fieldMetaData: [] };

const initDetailState = {};

const appInitState = {
  list: initListState,
  ui: initUiState,
  detailUi: initDetailUiState,
  detail: initDetailState
};

describe('ListView', () => {
  it('successfully loaded', () => {
   // cy.applicationLoaded();
    cy.userClickedPassportNav()

    //  cy.userClickedPassportNav()
  });
  // it('should have the right initial state', function() {
  //   cy.window()
  //     .its('store')
  //     .invoke('getState')
  //     .should('deep.equal', appInitState);
  // });
});
