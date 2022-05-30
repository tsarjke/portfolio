import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SkillList from '../SkillList';

describe('SkillList', () => {
  test('snapshot list with properly placed imgages', () => {
    render(<SkillList />);

    const list = screen.getByTestId('skill-list');
    expect(list).toMatchSnapshot();
  });
});
