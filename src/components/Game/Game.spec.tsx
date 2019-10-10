import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import Board from '../Board';
import Controls from '../Controls';
import InfoPrompter from '../InfoPrompter';
import MoveList from '../MoveList';
import Game from './Game';

describe('<Game />', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => (wrapper = mount(<Game />)));

  it('should render `<Board />`', () => {
    expect(wrapper.containsMatchingElement(<Board />)).toEqual(true);
  });

  it('should render `<InfoPrompter />`', () => {
    expect(
      wrapper.containsMatchingElement(
        <InfoPrompter>Player 1's Turn</InfoPrompter>
      )
    ).toEqual(true);
  });

  it('should render 2 `<MoveList />`', () => {
    const moveLists = [
      <MoveList playerName="Player 1" />,
      <MoveList playerName="Player 2" />,
    ];
    expect(wrapper.containsAllMatchingElements(moveLists)).toBe(true);
  });

  it('should render `<Controls />`', () => {
    expect(wrapper.containsMatchingElement(<Controls />)).toEqual(true);
  });

  it('should prompt the player', () => {
    expect(wrapper.find('[data-testid="infoPrompter"]').text()).toBe(
      "Player 1's Turn"
    );
  });

  it('should keep track of whose turn it is', () => {
    wrapper.find('[data-testid="square0"]').simulate('click');
    expect(wrapper.find('[data-testid="infoPrompter"]').text()).toBe(
      "Player 2's Turn"
    );
  });

  it('should only allow each square to be clicked once', () => {
    const square = wrapper.find('[data-testid="square0"]');
    square.simulate('click');
    expect(square.prop('disabled')).toBe(true);
    expect(wrapper.find('[data-testid="infoPrompter"]').text()).toBe(
      "Player 2's Turn"
    );
  });
});
