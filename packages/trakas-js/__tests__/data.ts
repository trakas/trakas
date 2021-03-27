import {
  DataObject,
  isEqualExcept,
  normalizeByKey,
  subtractData,
} from "../src";

type Note = {
  id: number;
  content: string;
};

const data: Note[] = [
  { id: 0, content: "this is note 0" },
  { id: 1, content: "this is note 1" },
  { id: 2, content: "this is note 2" },
];

describe("data", () => {
  describe("normalizeByKey", function () {
    it("should convert an array of data to data in object by key", function () {
      const expectedData: DataObject<Note> = {
        0: data[0],
        1: data[1],
        2: data[2],
      };

      const dataInObject = normalizeByKey(data, "id");
      expect(dataInObject).toStrictEqual(expectedData);
    });
  });

  describe("subtractData", function () {
    it("should subtract  data from an array with a data object", function () {
      const subtractedData: DataObject<Note> = { 1: data[1] };
      const expectedData: DataObject<Note> = {
        0: data[0],
        2: data[2],
      };

      const dataInObject = subtractData(data, subtractedData, "id");
      expect(dataInObject).toStrictEqual(expectedData);
    });
  });

  describe("isEqualExcept", function () {
    it("should return true for the same two data objects", function () {
      const leftObject = { a: 1, b: 2 };
      const rightObject = { a: 1, b: 2 };

      const compareResult = isEqualExcept(leftObject, rightObject);
      expect(compareResult).toBe(true);
    });

    it("should return false for different two data objects", function () {
      const leftObject = { a: 1, b: 2 };
      const rightObject = { a: 1, b: 2, c: undefined };

      const compareResult = isEqualExcept(leftObject, rightObject);
      expect(compareResult).toBe(false);
    });

    it("should return true for two data objects when the different field is ignored", function () {
      const leftObject = { a: 1, b: 2 };
      const rightObject = { a: 1, b: 2, c: undefined };

      const compareResult = isEqualExcept(leftObject, rightObject, ["c"]);
      expect(compareResult).toBe(true);
    });
  });
});
