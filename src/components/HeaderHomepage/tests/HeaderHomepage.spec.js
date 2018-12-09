import React from 'react';
import ReactDOM from 'react-dom';
import HeaderHomePage, { gridDirection } from '../HeaderHomepage';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

describe('<Header />', () => {
  describe('gridDirection', () => {
    it('works', () => {
      expect(gridDirection('xs')).toBe('row-reverse');
      expect(gridDirection('sm')).toBe('row');
    });
  });
  it('renders <Header /> without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderHomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders <Header /> without crashing with width is xs', () => {
    const div = document.createElement('div');
    const mockProps = {
      width: 'xs'
    };
    ReactDOM.render(<HeaderHomePage {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
