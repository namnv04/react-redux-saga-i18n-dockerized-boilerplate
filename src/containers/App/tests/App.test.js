import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App, mapStateToProps } from '../App';
import { getUsername } from '../selectors';

import HomePage from '../../HomePage/HomePage';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../selectors');

describe('<App />', () => {
  const mockChangeUsername = jest.fn();

  it('renders <App /> without crashing', () => {
    const mockProps = {
      changeUsername: mockChangeUsername,
      t: jest.fn()
    };
    const div = document.createElement('div');
    ReactDOM.render(<App {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders <App /> without crashing', () => {
    const mockData = {
      username: 'something'
    };
    getUsername.mockImplementation(() => mockData.username);
    const res = mapStateToProps();
    expect(res).toEqual(mockData);
  });
  it('route to home', () => {
    const wrapper = mount(
      <MemoryRouter initialIndex={0} initialEntries={['/']}>
        <HomePage/>
      </MemoryRouter>
    );
    expect(wrapper.find(HomePage)).toHaveLength(1);
  });
  it('route to 404 page', () => {
    const wrapper = mount(
      <MemoryRouter initialIndex={0} initialEntries={['/sdfasf']}>
        <NotFoundPage/>
      </MemoryRouter>
    );
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });
  describe('buttons click', () => {
    it('clicked', () => {
      const mockProps = {
        changeUsername: mockChangeUsername,
        t: jest.fn(),
        i18n: {
          changeLanguage: jest.fn()
        }
      };
      const wrapper = shallow(<App {...mockProps} />);
      wrapper.find('button.btn-set-locale').at(0).simulate('click');
      expect(mockProps.i18n.changeLanguage).toHaveBeenCalledWith('en');
      wrapper.find('button.btn-set-locale').at(1).simulate('click');
      expect(mockProps.i18n.changeLanguage).toHaveBeenCalledWith('es');
    });
  });
});
