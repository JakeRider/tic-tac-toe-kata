import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Square from '../Square';
import Board from './Board';

describe('<Board />', () => {
  let wrapper: ShallowWrapper;
  const boardDispatch = jest.fn();
  beforeEach(
    () =>
      (wrapper = shallow(
        <Board
          currentPlayer={1}
          boardState={Array(9).fill({ contents: null, disabled: false })}
          boardDispatch={boardDispatch}
        />
      ))
  );

  it('should render `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render 9 `<Square />`', () => {
    const squares = Array(9).fill(
      <Square
        index={0}
        currentPlayer={1}
        disabled={false}
        boardDispatch={boardDispatch}
      />
    );
    expect(wrapper.containsAllMatchingElements(squares)).toBe(true);
  });
});
