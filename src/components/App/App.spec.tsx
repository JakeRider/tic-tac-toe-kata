import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Game from '../Game';
import App from './App';

describe('<App />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it('should render `<Game />`', () => {
    expect(wrapper.containsMatchingElement(<Game />)).toEqual(true);
  });
});
