import getObjectNames from '../../src/library/redux/ui-reducer/getObjectNames';
import getPropNames from '../../src/library/redux/ui-reducer/getPropNames';
import metaData from '../../src/library/mock-data/mockMetaData';
import createObjectHelder from '../../src/library/redux/detail-ui-reducer/createObjectHelper';
import getFieldsMetaData from '../../src/library/redux/detail-ui-reducer/getFieldsMetaData';
const objectNames = getObjectNames({ metaData });

objectNames
  .filter(f => f === 'employee')
  .forEach(objectName => {
    const propNames = getPropNames({ objectName, metaData });
 
    describe(`DetailView for ${objectName}  `, function() {
      before(function() {
        cy.visit(`/${objectName}`);

        cy.findAPICall({ objectName });

        cy.userClickedNewBtn({ objectName });
        cy.fixture(`${objectName}.json`).then(function(list) {
          this.list = list;
        });
      });

      describe(`User clicks New Button`, function() {
        it(`New Button for ${objectName} clicked`, function() {
          cy.window()
            .its('store')
            .invoke('getState')
            .its('detail')
            .should('deep.equal', createObjectHelder({ objectName, metaData }));

          cy.window()
            .its('store')
            .invoke('getState')
            .its('detailUi')
            .should('deep.equal', {
              fieldMetaData: getFieldsMetaData({ objectName, metaData })
            });

          cy.url().should('include', `/edit/${objectName}`);

          propNames.forEach(propName => {
            cy.get([`[data-testid=${propName}]`]);
          });
          cy.get('[data-testid=save-btn').should('be.visible');
          cy.get('[data-testid=save-close-btn').should('be.visible');
          cy.get('[data-testid=cancel-btn').should('be.visible');
          cy.get('[data-testid=delete-btn').should('be.visible');
        });
      });

      describe('User enters input data', function() {
        const fields = getFieldsMetaData({ metaData, objectName });
        it(`user entered input data for ${objectName}`, () => {
          fields.forEach(field => {
            cy.userEntersInputData({ field });
            cy.window()
              .its('store')
              .invoke('getState')
              .its('detail')
              .then(obj => {
                if (field.type === 'text') {
                  expect(obj[field.name]).to.equal(field.name);
                }
                if (field.type === 'date') {
                  expect(obj[field.name]).to.equal('2009-12-12');
                }
              });
          });
        });
      });

      describe('User Saves Data', () => {
        it('User Clicked Save and close button', function() {
          cy.server();
          cy.route({
            method: 'POST',
            url: `http://localhost:8000/insertOne?document=${objectName}`,
            response: { _id: '1234' },
            status: 201
          }).as(objectName);

          cy.userClickedSaveButton({ objectName, btnType: 'save-and-close' });

          cy.url().should('eq', Cypress.config().baseUrl + `/${objectName}`);
          cy.wait(`@${objectName}`);
          cy.get('[data-testid=row-data').should(
            'have.length',
            this.list.length + 1
          );

          cy.window()
            .its('store')
            .invoke('getState')
            .its('list')
            .its('list')
            .should('have.length', this.list.length + 1);
        });
      });
    }); //DetailView
  });

describe('User clicked Delete button', () => {});

describe('User clicked Cancel button', () => {});
