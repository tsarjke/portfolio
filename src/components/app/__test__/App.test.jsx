import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import data from '../../../data.json';

describe('App', () => {
  test('test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // const header = screen.getByTestId('header');
    // expect(header).toBeInTheDocument();
    // const main = screen.getByTestId('main-section');
    // expect(main).toBeInTheDocument();
    // const footer = screen.getByTestId('footer');
    // expect(footer).toBeInTheDocument();
  });
});
