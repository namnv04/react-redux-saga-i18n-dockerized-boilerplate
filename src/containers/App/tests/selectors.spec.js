import { selectors } from '../reducers';

describe('selectors', () => {
  it('getUsername', () => {
    const mockState = {
      app: {
        dog: 'something'
      }
    };
    expect(selectors.getDog(mockState)).toEqual('something');
  });
});
