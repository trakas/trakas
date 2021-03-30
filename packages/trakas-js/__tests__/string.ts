import { compareString } from "../src";

describe("string", () => {
  describe("compareString", () => {
    test(`return 0 when "ab" === "ab"`, () => {
      const result = compareString("ab", "ab");
      expect(result).toStrictEqual(0);
    });

    test(`return negative value when "ab" comes before "ac"`, () => {
      const result = compareString("ab", "ac");
      expect(result).toBeLessThan(0);
    });

    test(`return positive value when "z" comes before "ab"`, () => {
      const result = compareString("z", "ab");
      expect(result).toBeGreaterThan(0);
    });
  });
});
