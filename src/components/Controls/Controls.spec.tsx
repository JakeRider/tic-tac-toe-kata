import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Controls from './Controls';

describe('<Controls />', () => {
  const rewindAction = jest.fn();
  const resetAction = jest.fn();
  let wrapper: ShallowWrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Controls rewindAction={rewindAction} resetAction={resetAction} />
      ))
  );

  it('should render a `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should contain two buttons', () => {
    expect(wrapper.find('button').length).toBe(2);
  });

  it('should handle a click for each button', () => {
    rewindAction.mockClear();
    resetAction.mockClear();
    wrapper.find('button').forEach(button => {
      button.simulate('click');
    });
    expect(rewindAction).toBeCalled();
    expect(resetAction).toBeCalled();
  });
});
