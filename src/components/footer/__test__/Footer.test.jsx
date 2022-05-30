import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../Footer';

describe('Footer', () => {
	test('should render the received text from the props ', () => {
		render(<Footer text="test text" />);
		const propsText = screen.getByText('test text');
		expect(propsText).toBeInTheDocument();
  });
});
