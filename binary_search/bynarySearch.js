const arr = [...Array(1001).keys()];

/**
 *
 * @param {Array<number>} arr
 * @param {number} target
 */
const bynarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  let count = 0;

  while (true) {
    mid = Math.round((right - left) / 2 + left);
    count += 1;
    if (arr[mid] === target) {
      console.log(count);
      return `Индекс ${mid}`;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid;
    }

    if (right === left) {
      console.log(count);
      return null;
    }
  }
};

console.log(bynarySearch(arr, 11111));
