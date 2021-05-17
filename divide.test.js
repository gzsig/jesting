const divide = require('./divide');

test('divide 100 / 10 to equal 10', () => {
    expect(divide(100, 10)).toBe(10);
});