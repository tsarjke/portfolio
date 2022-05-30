import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skills from '../Skills';

describe('Skills', () => {
  test('should render this component with a title from props', () => {
    render(<Skills title="title" />);

    const titleText = screen.getByText('title');
    expect(titleText).toBeInTheDocument();
  });

  test('should render SkillList inside itself', () => {
    render(<Skills title="title" />);

    const titleText = screen.getByTestId('skill-list');
    expect(titleText).toBeInTheDocument();
  });
});
