import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import MenuList from '../MenuList';

describe('MenuList', () => {
  test('Links inside MenuList should open the required component', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={<div>page1</div>}
          />
          <Route
            path="/test"
            element={<div>page2</div>}
          />
        </Routes>
        <MenuList
          data={[
            ['main', '/'],
            ['test', 'test'],
          ]}
          onLinkClick={jest.fn()}
        />
      </MemoryRouter>
    );

    const menuLinks = screen.getAllByTestId('menu-link');
    expect(screen.getByText('page1')).toBeInTheDocument();
    fireEvent.click(menuLinks[1]);
    expect(screen.getByText('page2')).toBeInTheDocument();
    fireEvent.click(menuLinks[0]);
    expect(screen.getByText('page1')).toBeInTheDocument();
  });
});
