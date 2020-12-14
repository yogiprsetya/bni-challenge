import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Unit test <Sidebar /> component', () => {
  const wrapper = shallow(<Sidebar />);

  test('Should render complete', () => {
    expect(wrapper).toBe(true);
  });

  // test('Should render breadcrumb item === links.length', () => {
  //   const list = wrapper.find('li.breadcrumb-item:not(.active)');
  //   expect(list).toHaveLength(mockProps.links.length);
  // });
});
