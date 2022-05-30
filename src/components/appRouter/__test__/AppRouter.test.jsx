import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../AppRouter';
import data from '../../../data.json';

describe('AppRouter', () => {
  test('should render this component with a header, footer and main section', () => {
    render(
      <MemoryRouter>
        <AppRouter
          data={data.eng}
          onLangClick={jest.fn()}
        />
      </MemoryRouter>
    );

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    const main = screen.getByTestId('main-section');
    expect(main).toBeInTheDocument();
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
