import { randomNumber } from "../src";

describe("number", () => {
  describe("randomNumber", () => {
    test("generate random number from 0 to 2", () => {
      const randomNumbers = [...Array(20)].map(() => randomNumber(0, 2));
      expect(randomNumbers).toStrictEqual(expect.arrayContaining([0, 1, 2]));
    });
  });
});
