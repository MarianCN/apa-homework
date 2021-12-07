import { getTime } from "..";

describe("Testing Timer functions", () => {
  test("getTime", () => {
    const values = [
      {
        test: 1,
        expect: { mins: 0, secs: 1 },
      },
      {
        test: -10,
        expect: { mins: 0, secs: 0 },
      },
      {
        test: 60,
        expect: { mins: 1, secs: 0 },
      },
      {
        test: 201,
        expect: { mins: 3, secs: 21 },
      },
      {
        test: 218,
        expect: { mins: 3, secs: 38 },
      },
    ];

    values.map((value) => {
      expect(getTime(value.test)).toStrictEqual(value.expect);
    });
  });
});
