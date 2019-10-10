import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import Square from './Square';

describe('<Square />', () => {
  let wrapper: ReactWrapper;
  const clickAction = jest.fn();
  beforeEach(() => (wrapper = mount(<Square onClick={clickAction} />)));

  it('should render `<button />`', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should default to an empty state', () => {
    const contents = wrapper.prop('contents');
    expect(contents).toBe(null);
  });

  it('should have an "X" state', () => {
    wrapper.setProps({ contents: 'X' });
    expect(wrapper.text()).toBe('X');
  });

  it('should have an "O" state', () => {
    wrapper.setProps({ contents: 'O' });
    expect(wrapper.text()).toBe('O');
  });

  it('should handle a click', () => {
    clickAction.mockClear();
    wrapper.find('button').simulate('click');
    expect(clickAction).toBeCalled();
  });
});
