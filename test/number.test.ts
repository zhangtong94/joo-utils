import { getRandomNumber } from '../src/number';

describe("getRandomNumber", () => {
    it("getRandomNumber", () => {
        expect(getRandomNumber(1, 10)).toBeGreaterThanOrEqual(1);
        expect(getRandomNumber(1, 10)).toBeLessThanOrEqual(10);
    });
});
