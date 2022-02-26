const array = [1, 5, 6, 88, 4, 2, 56, 12, 2, 2, 5, 4, 54, 5, 65, 56, 45, 456, 65, 456, 56, 4, 65456, 4, 54, 5, 4, 24, 15, 2];
let count = 0;

/**
 * @param {Array<number>} array
 */
const selectedSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    [array[indexMin], array[i]] = [array[i], array[indexMin]];
  }

  return array;
};

console.log(selectedSort(array));
