import sayHello from '../utils/sayHello.js';

describe('Say hello function', () => {
  it('returns a friendly greeting', () => {
    expect(sayHello()).toEqual('Hello');
  });
});