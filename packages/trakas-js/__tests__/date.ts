import { formatTimeInSecond } from "../src";

describe("date", () => {
  describe("formatTimeInSecond", () => {
    test("format time from number: 1012.14", () => {
      const timeInString = formatTimeInSecond(1012.14);
      expect(timeInString).toStrictEqual("00:16:52");
    });

    test("format time from number: 1200", () => {
      const timeInString = formatTimeInSecond(1200);
      expect(timeInString).toStrictEqual("00:20:00");
    });

    test("format time from number: 98400", () => {
      const timeInString = formatTimeInSecond(98400);
      expect(timeInString).toStrictEqual("27:20:00");
    });

    test("format time from number: 72000", () => {
      const timeInString = formatTimeInSecond(97200);
      expect(timeInString).toStrictEqual("27:00:00");
    });

    test("format time from string: '98420'", () => {
      const timeInString = formatTimeInSecond("98420");
      expect(timeInString).toStrictEqual("27:20:20");
    });
  });
});
