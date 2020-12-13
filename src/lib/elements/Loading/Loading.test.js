import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

const mockProps = {
  shown: true
};

describe('Unit test <Loading /> element', () => {
  const wrapper = shallow(<Loading {...mockProps} />);

  test('Should render when loading data in progress', () => {
    const display = wrapper.find('.loading-bar');

    expect(display.exists()).toBe(mockProps.shown);
  });

  test('Should destroy when loading data completed', () => {
    const display = wrapper.find('.loading-bar');

    expect(!display.exists()).toBe(!mockProps.shown);
  });
});
