import renderer from 'react-test-renderer';
import Contact from '../Contact';

test('renders correctly', () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});
