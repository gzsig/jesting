const multiply = require('./multiply');

test('multiply 6 * 11 to equal 66', () => {
    expect(multiply(6, 11)).toBe(66);
});