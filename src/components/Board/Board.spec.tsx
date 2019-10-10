import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Square from '../Square';
import Board from './Board';

describe('<Board />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Board />)));

  it('should render `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render 9 `<Square />`', () => {
    const squares = Array(9).fill(<Square />);
    expect(wrapper.containsAllMatchingElements(squares)).toBe(true);
  });
});
