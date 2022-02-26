const array = [123, 2, 14, 432, 4, 32, 4, 56, 4, 65, 47, 4, 5, 34, 5, 5467, 658, 56, 7, 34, 5, 43, 65, 7, 5];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
};

console.log(bubbleSort(array));
