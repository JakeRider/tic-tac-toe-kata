import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Controls from './Controls';

describe('<Controls />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Controls />)));

  it('should render a `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});