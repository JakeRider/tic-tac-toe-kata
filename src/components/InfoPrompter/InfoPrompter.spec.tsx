import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import InfoPrompter from './InfoPrompter';

describe('<InfoPrompter />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<InfoPrompter />)));

  it('should render a `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
