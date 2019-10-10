import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import MoveList from './MoveList';

describe('<MoveList />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<MoveList />)));

  it('should render `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
