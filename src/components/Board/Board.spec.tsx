import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Board from './Board';

describe('<Board />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Board />)));

  it('should render `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
