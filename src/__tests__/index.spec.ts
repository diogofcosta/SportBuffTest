import { sum } from "../index";

test('Sum 4 + 5 should be = 9', () => {
    const first = 4;
    const second = 5;

    const expectedResult = 9;

    const result = sum(first, second);
    expect(result).toBe(expectedResult);
})