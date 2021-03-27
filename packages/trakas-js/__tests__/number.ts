import { randomNumber } from "../src";

describe("number", () => {
  describe("randomNumber", function () {
    it("should generate random number from 0 to 2", function () {
      const randomNumbers = [...Array(20)].map(() => randomNumber(0, 2));
      expect(randomNumbers).toStrictEqual(expect.arrayContaining([0, 1, 2]));
    });
  });
});
