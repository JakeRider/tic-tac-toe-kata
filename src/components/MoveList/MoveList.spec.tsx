import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import MoveList from './MoveList';

describe('<MoveList />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<MoveList />)));

  it('should render `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('takes a player name', () => {
    wrapper.setProps({ playerName: 'Player 1' });
    expect(wrapper.find('[data-testid="playerName"]').text()).toBe('Player 1');
  });
});
