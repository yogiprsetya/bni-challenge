import React from 'react';
import { shallow } from 'enzyme';
import InputGroup from './InputGroup';

const mockProps = {
  title: 'Berat pengiriman',
  type: 'number',
  required: true,
  appendText: 'kg'
};

describe('Unit test <InputGroup /> element', () => {
  const wrapper = shallow(<InputGroup {...mockProps} />);

  test('Should render props without any errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Should render append text when available', () => {
    const appendIcon = wrapper.find('small');

    expect(appendIcon.exists()).toBe(mockProps.appendText !== undefined);
  });
});
