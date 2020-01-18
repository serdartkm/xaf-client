import React from 'react';
import { render } from '@testing-library/react';
import TextInput from '../text-input'

test('renders learn react link', () => {
  const { getByText } = render(<TextInput />);
  const linkElement = getByText(/textinput/i);
  expect(linkElement).toBeInTheDocument();
});
