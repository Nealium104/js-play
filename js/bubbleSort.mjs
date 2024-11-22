export function bubbleSort(array) {
  let sorted = false;
  const currentEnd = array.length - 1;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < currentEnd; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      }
    }
  }
  return array;
}
