import { DataObject, isEqualExcept, normalizeByKey, subtractData } from "../src";

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
  describe("normalizeByKey", () => {
    test("convert an array of data to data in object by key", () => {
      const expectedData: DataObject<Note> = {
        0: data[0],
        1: data[1],
        2: data[2],
      };

      const dataInObject = normalizeByKey(data, "id");
      expect(dataInObject).toStrictEqual(expectedData);
    });
  });

  describe("subtractData", () => {
    test("subtract  data from an array with a data object", () => {
      const subtractedData: DataObject<Note> = { 1: data[1] };
      const expectedData: DataObject<Note> = {
        0: data[0],
        2: data[2],
      };

      const dataInObject = subtractData(data, subtractedData, "id");
      expect(dataInObject).toStrictEqual(expectedData);
    });
  });

  describe("isEqualExcept", () => {
    test("return true for the same two data objects", () => {
      const leftObject = { a: 1, b: 2 };
      const rightObject = { a: 1, b: 2 };

      const compareResult = isEqualExcept(leftObject, rightObject);
      expect(compareResult).toBe(true);
    });

    test("return false for different two data objects", () => {
      const leftObject = { a: 1, b: 2 };
      const rightObject = { a: 1, b: 2, c: undefined };

      const compareResult = isEqualExcept(leftObject, rightObject);
      expect(compareResult).toBe(false);
    });

    test("return true for two data objects when the different field is ignored", () => {
      const leftObject = { a: 1, b: 2 };
      const rightObject = { a: 1, b: 2, c: undefined };

      const compareResult = isEqualExcept(leftObject, rightObject, ["c"]);
      expect(compareResult).toBe(true);
    });
  });
});
