import React from 'react';

import {
  render,
  wait,
  screen,
  waitForElement,
  fireEvent
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListView from '../../list-view/ListView';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import mockMetaData from '../../mock-data/mockMetaData';
import useCrud from '../../useCrud';
import renderWithRedux from './renderWithRedux';
import store from '../../../store';
function CrudApplication({ metaData }) {
  const { state, createObject, selectObject, find } = useCrud({
    metaData
  });
  debugger;
  return (
    <ListView
      find={find}
      selectObject={selectObject}
      createObject={createObject}
      state={state}
    />
  );
}

describe('ListView component', () => {
  it('Generates ListView with required fields', async done => {
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          json: () => {
            return [
              {
                _id: '1',
                firstName: 'dragos',
                lastName: 'mario',
                birthPlace: 'tokiyo',
                birthDate: '10.10.1950'
              }
            ];
          }
        });
      });
    });

   renderWithRedux(
      <BrowserRouter>
        <div>
          <Link to={`/crud/list/employee`}>findlist</Link>
          <Route exact path={`/crud/list/:objectName`}>
            <CrudApplication metaData={mockMetaData} />
          </Route>
        </div>
      </BrowserRouter>,
      { store }
    );

    fireEvent.click(screen.getByText(/findlist/i));

    await waitForElement(() => {
      expect(screen.getByText(/mario/i)).toBeVisible();
      expect(screen.getByText(/dragos/i)).toBeVisible();
      expect(screen.getByText(/tokiyo/i)).toBeVisible();
      expect(screen.getByText(/10.10.1950/i)).toBeVisible();
      done();
    });

  
  });
});
