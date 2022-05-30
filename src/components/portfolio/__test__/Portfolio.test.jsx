import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Portfolio from '../Portfolio';

describe('Portfolio', () => {
  test('snapshot section with properly placed props', () => {
    render(
      <Portfolio
        data={{
          title: 'title',
          text: 'text',
          examples: [['test', 'site-link', 'code-link']],
        }}
      />,
    );

    const section = screen.getByTestId('portfolio-section');
    expect(section).toMatchSnapshot();
  });
});
