import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Game from './Game';

describe('<App />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Game />)));

  it('should render a `<div />`', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
