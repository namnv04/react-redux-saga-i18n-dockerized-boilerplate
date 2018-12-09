import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App, mapStateToProps, mapDispatchToProps } from '../App';
import { selectors } from '../reducers';

import HomePage from '../../HomePage/HomePage';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../reducers');

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
    const mockState = {
      app: {
        dog: 'something'
      }
    };
    selectors.getDog = jest.fn(() => mockState.app.dog);
    const res = mapStateToProps();
    mapDispatchToProps();
    expect(res).toEqual({ getDog: 'something' });
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

  describe('methods', () => {
    let wrapper, instance;
    const mockProps = {
      t: jest.fn(),
      i18n: {
        changeLanguage: jest.fn()
      },
      requestDog: jest.fn()
    };
    beforeAll(() => {
      wrapper = shallow(<App {...mockProps} />);
      instance = wrapper.instance();
    });
    describe('onClickRequestDog', () => {
      it('works', () => {
        instance.onClickRequestDog();
        expect(mockProps.requestDog).toHaveBeenCalled();
      });
    });
  });
});
