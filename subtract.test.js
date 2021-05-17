const subtract = require('./subtract');

test('subtract 30 - 7 to equal 23', () => {
    expect(subtract(30, 7)).toBe(23);
});