import React from 'react';
import { screen, fireEvent, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import mockMetaData from '../../mock-data/mockMetaData';
import getFieldsMetaData from '../../getFieldsMetaData';
import createObjectHelper from '../../createObjectHelper';
import DetailView from '../DetailView';
import renderWithRedux from './renderWithRedux';
import useCrud from '../../useCrud';
import { initState } from '../../reducer';

const fields = getFieldsMetaData({
  metaData: mockMetaData,
  objectName: 'employee'
});
const obj = createObjectHelper({
  metaData: mockMetaData,
  objectName: 'employee'
});

function CrudApplication({ metaData }) {
  const { state, handleChange } = useCrud({
    metaData
  });
  return <DetailView handleChange={handleChange} state={state} />;
}

describe('DetailView', () => {
  beforeEach(() => {
    cleanup();
  });
  it('All input fields and controls are visible', () => {
    render(
      <div>
        <BrowserRouter>
          <DetailView
            state={{ fields, obj, objectName: 'employee' }}
            handleChange={() => {}}
          />
        </BrowserRouter>
      </div>
    );

    expect(screen.getByTestId(/firstName/i)).toBeVisible();
    expect(screen.getByTestId(/lastName/i)).toBeVisible();
    expect(screen.getByTestId(/birthDate/i)).toBeVisible();
    expect(screen.getByTestId(/birthPlace/i)).toBeVisible();

    expect(screen.getByTestId('close-btn')).toBeVisible();
    expect(screen.getByTestId(/save-btn/i)).toBeVisible();
    expect(screen.getByTestId(/delete-btn/i)).toBeVisible();
    expect(screen.getByTestId(/save-close-btn/i)).toBeVisible();
  });

  it('Enter input data', async () => {
    const { getByTestId } = renderWithRedux(
      <div>
        <BrowserRouter>
          <CrudApplication metaData={mockMetaData} />
        </BrowserRouter>
      </div>,
      { crud: { ...initState, fields, obj, objectName: 'employee' } }
    );

    fireEvent.change(getByTestId('firstName'), {
      target: { value: 'dragos' }
    });
    expect(getByTestId(/firstName/i).value).toEqual('dragos');

    fireEvent.change(getByTestId('lastName'), {
      target: { value: 'mario' }
    });
    expect(getByTestId(/lastName/i).value).toEqual('mario');

    fireEvent.change(getByTestId('birthPlace'), {
      target: { value: 'tokio' }
    });
    expect(getByTestId(/birthPlace/i).value).toEqual('tokio');

    fireEvent.change(getByTestId(/birthDate/i), {
      target: { value: '2020-05-12' }
    });
    expect(getByTestId(/birthDate/i).value).toEqual('2020-05-12');
  });

  it.todo('save input data');
  it.todo('cancel input data');
  it.todo('delete input data');
});
