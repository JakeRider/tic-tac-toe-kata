import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import Square from './Square';

describe('<Square />', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => (wrapper = mount(<Square />)));

  it('should render `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should default to an empty state', () => {
    const contents = wrapper.prop('contents');
    expect(contents).toBe(null);
  });

  it('should have an "X" state', () => {
    wrapper.setProps({ contents: 'X' });
    expect(wrapper.text()).toBe('X');
  });
});
