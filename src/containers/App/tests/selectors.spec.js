import * as selectors from '../selectors';

describe('selectors', () => {
  it('getUsername', () => {
    const mockState = {
      app: {
        username: 'something'
      }
    };
    expect(selectors.getUsername(mockState)).toEqual('something');
  });
});
