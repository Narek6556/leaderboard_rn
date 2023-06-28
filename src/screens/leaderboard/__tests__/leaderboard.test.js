import React from 'react';
import LeaderBoard from '../leaderbord';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

it('Leaderboard Screen renders correctly', () => {
  const tree = renderer.create(<LeaderBoard />).toJSON();

  expect(tree).toMatchSnapshot();
});
