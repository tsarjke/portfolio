import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  test('should change the language when another language button is clicked', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('Ivan Tsarev')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Ru'));
    expect(screen.getByText('Иван Царев')).toBeInTheDocument();
  });
});
