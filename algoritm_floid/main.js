function reduceForTable(obj, row, index) {
  return { ...obj, [index !== 8 ? index : 'Sum']: row };
}

function sortFloid(matrix) {
  for (let k = 0; k < matrix.length; k++) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] > matrix[i][k] + matrix[k][j]) {
          matrix[i][j] = matrix[i][k] + matrix[k][j];
        }
      }
    }
  }

  return matrix;
}

function countSum(matrix, populations) {
  const sumArr = [];

  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;

    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[i][j] * populations[j];
    }
    sumArr.push(sum);
  }
  matrix.push(sumArr);

  return matrix;
}

function searchMinSum(matrix) {
  const arrSum = matrix[matrix.length - 1];

  const minSum = Math.min(...arrSum);
  const indexEndV = arrSum.findIndex((sum) => sum === minSum);

  return { minSum, indexEndV };
}

const populations = [80, 100, 140, 90, 60, 50, 40, 60];

const matrix = [
  [0, Infinity, Infinity, 3, 1, Infinity, Infinity, Infinity],
  [2, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, 4, 0, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, 0, Infinity, Infinity, Infinity, 8],
  [Infinity, Infinity, Infinity, Infinity, 0, 2, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, 0, 3, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 1],
  [10, Infinity, 3, Infinity, Infinity, Infinity, Infinity, 0],
];

const mutationMatrix = countSum(sortFloid(matrix), populations);

console.table(mutationMatrix.reduce(reduceForTable, {}));

const { minSum, indexEndV } = searchMinSum(mutationMatrix);

console.log(
  `Самое оптимальное размещение новогодней ёлки в вершине ${
    indexEndV + 1
  }, суммарное расстояние, проходимое всеми жителями, равно ${minSum}.`,
);
