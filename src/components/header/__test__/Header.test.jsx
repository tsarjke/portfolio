import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  test('should not render menu when menuVisibility === false (innerWidth < 768px)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    });
    window.dispatchEvent(new Event('resize'));
    render(
      <MemoryRouter>
        <Header
          data={{ lang: ['en', 'ru'], menu: [['main', '/']] }}
          currentLang="en"
          onLangClick={jest.fn()}
        />
      </MemoryRouter>
    );
    const menu = screen.queryByTestId('menu');
    expect(menu).toBeNull();
  });

  test('should render menu when menuVisibility === true (innerWidth >= 768px)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1000,
    });
    window.dispatchEvent(new Event('resize'));
    render(
      <MemoryRouter>
        <Header
          data={{ lang: ['en', 'ru'], menu: [['main', '/']] }}
          currentLang="en"
          onLangClick={jest.fn()}
        />
      </MemoryRouter>
    );
    const menu = screen.queryByTestId('menu');
    expect(menu).toBeInTheDocument();
  });

  test('should hide the menu on resize when width < 768 and show in the opposite case', () => {
    render(
      <MemoryRouter>
        <Header
          data={{ lang: ['en', 'ru'], menu: [['main', '/']] }}
          currentLang="en"
          onLangClick={jest.fn()}
        />
      </MemoryRouter>
    );
    fireEvent.resize(window, { target: { innerWidth: 500 } });
    let menu = screen.queryByTestId('menu');
    expect(menu).toBeNull();
    fireEvent.resize(window, { target: { innerWidth: 1000 } });
    menu = screen.queryByTestId('menu');
    expect(menu).toBeInTheDocument();
  });

  test('should show the menu on menu-btn click and hide on the second click (width < 768px)', () => {
    render(
      <MemoryRouter>
        <Header
          data={{ lang: ['en', 'ru'], menu: [['main', '/']] }}
          currentLang="en"
          onLangClick={jest.fn()}
        />
      </MemoryRouter>
    );
    fireEvent.resize(window, { target: { innerWidth: 500 } });
    const menuBtn = screen.getByTestId('menu-button');
    let menu = screen.queryByTestId('menu');
    expect(menu).toBeNull();
    fireEvent.click(menuBtn);
    menu = screen.queryByTestId('menu');
    expect(menu).toBeInTheDocument();
    fireEvent.click(menuBtn);
    menu = screen.queryByTestId('menu');
    expect(menu).toBeNull();
  });
});
