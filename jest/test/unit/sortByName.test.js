const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);
    expect(result).toEqual(expected);
  });

  test("Function throws without params", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });

  // test1("passing zero forces the default total of 1", () => {
  //   const bar = progressBar(0);
  //   expect(bar.total).toBe(1);
  // });

  describe("Books names test suit negative", () => {
    it("Кepetition of book titles", () => {
      const i = [
        "Гарри Поттер",
        "Волшебник изумрудного города",
        "Волшебник изумрудного города",
      ];
      const e = [
        "Волшебник изумрудного города",
        "Волшебник изумрудного города",
        "Гарри Поттер",
      ];

      const res = sorting.sortByName(i);
      expect(res).toEqual(e);
    });
  });
});
