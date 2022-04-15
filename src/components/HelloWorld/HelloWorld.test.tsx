import { render } from '@testing-library/react';
import React from 'react';
import HelloWorld from './HelloWorld';

describe('Hello World', () => {
  test('renders the Hello World component', () => {
    render(<HelloWorld label="Raihan" />);
  });
});
