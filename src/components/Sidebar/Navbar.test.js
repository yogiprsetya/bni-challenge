import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { InputGroup } from 'lib/elements';
import Navbars from './Navbar';

const middleware = [thunk];

const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Navbars store={store} />).childAt(0).dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      auth: [{
        isAuthenticated: true,
        user: {
          id: '5db6b1fb3cd7cf73d4b4833b',
          email: 'smarteye@gmail.com',
          username: 'smarteye',
          iat: 1603673355
        }
      }]
    };

    wrapper = setUp(initialState);
  });

  test('Should render complete with store', () => {
    const component = wrapper;

    expect(component.exists()).toBe(true);
  });

  test('Should render search input', () => {
    const component = wrapper;
    const searchInput = component.find(InputGroup);

    expect(searchInput.exists()).toBe(true);
  });
});
