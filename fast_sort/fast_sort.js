const arr = [43, 4, 32, 4, 1234, 32, 4, 32, , 5, 43, 543, 5, 457, 6, 578, 54, 64, 356, 54, 7, 658, 76, 456, 54, 854, 8, 748, 48, 489, 48];

const fastSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivatElem = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivatElem) {
      left.push(arr[i]);
    } else if (arr[i] > pivotIndex) {
      right.push(arr[i]);
    }
  }

  return [...fastSort(left), pivatElem, ...fastSort(right)];
};

console.log(fastSort(arr));
