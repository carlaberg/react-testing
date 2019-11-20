// The describe block contains a group of tests that are related to each other
describe('Calculator', () => {

  // The it block ("it" can be replaced with "test") wraps an individual test
  it('Checks if one is equal to one', () => {
    const value = 1

    // The expect function gives you access to the Jest assertion library
    // which helps you test your code
    expect(value).toEqual(1)
  })
})