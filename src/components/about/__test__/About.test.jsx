import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../About';

describe('Footer', () => {
  test('should render the received title from the props ', () => {
    render(<About data={{ title: 'test title', text: ['text1', 'text2'] }} />);
    const propsTitle = screen.getByText('test title');
    expect(propsTitle).toBeInTheDocument();
  });

  test('should render a certain number of children from the props text', () => {
    render(
      <About
        data={{ title: 'test title', text: ['text1', 'text2', 'text3'] }}
      />
    );
    const textDiv = screen.getByTestId('text');
    expect(textDiv.children).toHaveLength(3);
  });
});
