import { bubbleSort } from "../js/bubbleSort.mjs";

export function TestBubbleSort() {
  let passing;

  const testCases = [
    [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ],
    [
      [4, 3, 2, 1],
      [1, 2, 3, 4],
    ],
    [[], []],
  ];

  testCases.map((item) => {
    const testSort = bubbleSort(item[0]);
    const expectedSort = item[1];

    for (let i = 0; i < testSort.length - 1; i++) {
      if (testSort[i] == expectedSort[i]) {
        passing = true;
      } else {
        passing = false;
        break;
      }
    }
  });
  return passing;
}
