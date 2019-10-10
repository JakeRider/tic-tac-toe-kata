import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Square from './Square';

describe('<Square />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Square />)));

  it('should render `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
