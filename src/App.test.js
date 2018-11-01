import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomeComponent from './components/Home/Home';
import NotFoundComponent from './components/NotFound/NotFound';
import AboutComponent from './components/About/About';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders <App /> without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('route to about', () => {
    const wrapper = mount(
      <MemoryRouter initialIndex={1} initialEntries={['/', '/about']}>
        <AboutComponent/>
      </MemoryRouter>
    );
    expect(wrapper.find(HomeComponent)).toHaveLength(0);
    expect(wrapper.find(AboutComponent)).toHaveLength(1);
  });
  it('route to home', () => {
    const wrapper = mount(
      <MemoryRouter initialIndex={0} initialEntries={['/']}>
        <HomeComponent/>
      </MemoryRouter>
    );
    expect(wrapper.find(HomeComponent)).toHaveLength(1);
    expect(wrapper.find(AboutComponent)).toHaveLength(0);
  });
  it('route to 404 page', () => {
    const wrapper = mount(
      <MemoryRouter initialIndex={0} initialEntries={['/sdfasf']}>
        <NotFoundComponent/>
      </MemoryRouter>
    );
    expect(wrapper.find(NotFoundComponent)).toHaveLength(1);
    expect(wrapper.find(AboutComponent)).toHaveLength(0);
  });
});
