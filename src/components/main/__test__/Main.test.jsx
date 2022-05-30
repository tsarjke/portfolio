import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from '../Main';

describe('Main', () => {
  test('should render this component with a title and labels from props', () => {
    render(<Main data={{ title: 'title', label: ['label'] }} />);

    const titleText = screen.getByText('title');
    expect(titleText).toBeInTheDocument();
    const labelText = screen.getByText('label');
		expect(labelText).toBeInTheDocument();
  });
});
