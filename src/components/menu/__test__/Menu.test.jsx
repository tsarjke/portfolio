import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Menu from '../Menu';

describe('Menu', () => {
  let onLangClick;
  beforeAll(() => {
    onLangClick = jest.fn();
  });

  test('should call the onLangClick function on lang-btns (Ru or Eng) click', () => {
    render(
      <MemoryRouter>
        <Menu
          data={{ lang: ['en', 'ru'], menu: [['main', '/']] }}
          currentLang="en"
          onLangClick={onLangClick}
          onLinkClick={jest.fn()}
        />
      </MemoryRouter>
    );

    const langBtns = screen.getAllByTestId('lang-button');
    fireEvent.click(langBtns[1]);
    expect(onLangClick).toBeCalled();
  });
});
