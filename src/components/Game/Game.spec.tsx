import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Board from '../Board';
import Game from './Game';

describe('<Game />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Game />)));

  it('should render a `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render `<Board />`', () => {
    expect(wrapper.containsMatchingElement(<Board />)).toEqual(true);
  });
});
