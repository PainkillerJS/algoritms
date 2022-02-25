const array = [2, 3, 5, 4, 6, 8, 7, 9, 54, 2, 3, 1, 3];

/**
 *
 * @param {Array<number>} array
 * @param {number} target
 */
const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }

  return null;
};

console.log(linearSearch(array, 54));
