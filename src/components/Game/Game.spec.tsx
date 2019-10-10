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
    expect(square.prop('disabled')).toBeTruthy;
    expect(wrapper.find('[data-testid="infoPrompter"]').text()).toBe(
      "Player 2's Turn"
    );
  });

  it('should set the contents of the square based on whose turn it is', () => {
    const square0 = wrapper.find('[data-testid="square0"]');
    const square1 = wrapper.find('[data-testid="square1"]');
    square0.simulate('click');
    square1.simulate('click');
    expect(square0.text()).toBe('X');
    expect(square1.text()).toBe('O');
  });

  it('should tell you if someone won', () => {
    const squares: ReactWrapper[] = [];

    for (let i = 0; i < 9; i += 1) {
      const square = wrapper.find(`[data-testid="square${i}"]`);
      squares.push(square);
    }

    const moveSequence = [0, 3, 1, 4, 2];

    moveSequence.forEach(index => {
      squares[index].simulate('click');
    });

    expect(wrapper.find('[data-testid="infoPrompter"]').text()).toBe(
      'Player 1 Wins!'
    );
  });

  it('should tell you there is a tie', () => {
    const squares: ReactWrapper[] = [];

    for (let i = 0; i < 9; i += 1) {
      const square = wrapper.find(`[data-testid="square${i}"]`);
      squares.push(square);
    }

    const moveSequence = [0, 1, 2, 6, 7, 8, 3, 4, 5];

    moveSequence.forEach(index => {
      squares[index].simulate('click');
    });

    expect(wrapper.find('[data-testid="infoPrompter"]').text()).toBe(
      "It's a tie!"
    );
  });

  it('should disable all squares when someone wins', () => {
    const squares: ReactWrapper[] = [];

    for (let i = 0; i < 9; i += 1) {
      const square = wrapper.find(`[data-testid="square${i}"]`);
      squares.push(square);
    }

    const moveSequence = [0, 3, 1, 4, 2];

    moveSequence.forEach(index => {
      squares[index].simulate('click');
    });

    for (let i = 0; i < 9; i += 1) {
      const square = wrapper.find(`[data-testid="square${i}"]`);
      expect(square.prop('disabled')).toBe(true);
    }
  });

  it('should reset when you click the reset button', () => {
    const squares: ReactWrapper[] = [];

    for (let i = 0; i < 9; i += 1) {
      const square = wrapper.find(`[data-testid="square${i}"]`);
      squares.push(square);
    }

    const moveSequence = [0, 3, 1, 4, 2];

    moveSequence.forEach(index => {
      squares[index].simulate('click');
    });

    wrapper.find('[data-testid="resetButton"]').simulate('click');

    for (let i = 0; i < 9; i += 1) {
      const square = wrapper.find(`[data-testid="square${i}"]`);
      expect(square.prop('disabled')).toBe(false);
    }

    expect(wrapper.find('[data-testid="infoPrompter"]').text()).toBe(
      "Player 1's Turn"
    );
  });
});
