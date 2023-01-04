// Дано 2 отсортированных (по возрастанию) массива A и B длины M и N.
// Нужно слить их в один отсортированный (по возрастанию) массив, состоящий из элементов первых двух.

const mergeTwoArray = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let k = i + j + 1;

  while (i >= 0 && j >= 0) {
    if (num1[i] >= num2[j]) {
      num1[k] = num1[i--];
    } else {
      num1[k] = num2[j--];
    }

    k--;
  }

  while (i >= 0) {
    num1[k--] = num1[i--];
  }

  while (j >= 0) {
    num1[k--] = num2[j--];
  }

  console.log(num1);
};

console.log('test 1');
mergeTwoArray([1, 2, 3, 4, 5], [2, 5, 6, 7]);
