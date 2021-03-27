import { compareString } from "../src";

describe("string", () => {
  describe("compareString", function () {
    it(`should return 0 when "ab" === "ab"`, function () {
      const result = compareString("ab", "ab");
      expect(result).toStrictEqual(0);
    });

    it(`should return negative value when "ab" comes before "ac"`, function () {
      const result = compareString("ab", "ac");
      expect(result).toBeLessThan(0);
    });

    it(`should return positive value when "z" comes before "ab"`, function () {
      const result = compareString("z", "ab");
      expect(result).toBeGreaterThan(0);
    });
  });
});
