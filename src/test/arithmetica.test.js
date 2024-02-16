const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('209999999999999 + 30000000000000 is equal to 5', () => {
    expect(add(209999999999999, 30000000000000)).toBe(239999999999999);
});

test('92847392732974742 + 274629836432 is equal to 5', () => {
    expect(add(92847392732974742, 274629836432)).toBe(92847667362811174);
});