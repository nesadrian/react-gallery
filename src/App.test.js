import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import About from './components/about/About'

describe('rendering test core functionailty', () => {
  test('renders footer text', () => {
    const { getByText } = render(<App />);
    getByText('GitHub');
  });

  test('renders about page correctly', () => {
    const tree = renderer
      .create(<About />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

