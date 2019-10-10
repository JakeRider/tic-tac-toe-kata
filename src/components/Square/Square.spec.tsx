import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import Square from './Square';

describe('<Square />', () => {
  let wrapper: ReactWrapper;
  const clickAction = jest.fn();
  beforeEach(
    () =>
      (wrapper = mount(
        <Square
          dataTestID="square0"
          onClick={clickAction}
          setSquare={jest.fn()}
        />
      ))
  );

  it('should render `<button />`', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should default to an empty state', () => {
    expect(wrapper.text()).toBe('');
  });

  it('should handle a click', () => {
    clickAction.mockClear();
    wrapper.find('button').simulate('click');
    expect(clickAction).toBeCalled();
  });
});
