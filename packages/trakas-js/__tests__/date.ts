import { formatTimeInSecond } from "../src";

describe("date", () => {
  describe("formatTimeInSecond", function () {
    it("should format time from number: 1012.14", function () {
      const timeInString = formatTimeInSecond(1012.14);
      expect(timeInString).toStrictEqual("00:16:52");
    });

    it("should format time from number: 1200", function () {
      const timeInString = formatTimeInSecond(1200);
      expect(timeInString).toStrictEqual("00:20:00");
    });

    it("should format time from number: 98400", function () {
      const timeInString = formatTimeInSecond(98400);
      expect(timeInString).toStrictEqual("27:20:00");
    });

    it("should format time from number: 72000", function () {
      const timeInString = formatTimeInSecond(97200);
      expect(timeInString).toStrictEqual("27:00:00");
    });

    it("should format time from string: '98420'", function () {
      const timeInString = formatTimeInSecond("98420");
      expect(timeInString).toStrictEqual("27:20:20");
    });
  });
});
