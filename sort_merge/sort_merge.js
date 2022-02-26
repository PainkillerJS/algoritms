const arr = [43, 4, 32, 4, 1234, 32, 4, 32, 5, 43, 543, 5, 457, 6, 578, 54, 64, 356, 54, 7, 658, 76, 456, 54, 854, 8, 748, 48, 489, 48];

const merge = (arrFirst, arrSecond) => {
  const arrSort = [];
  let i = (j = 0);
  // сравниваем два массива, поочередно сдвигая указатели
  while (i < arrFirst.length && j < arrSecond.length) {
    arrSort.push(arrFirst[i] < arrSecond[j] ? arrFirst[i++] : arrSecond[j++]);
  }
  // обрабатываем последний элемент при разной длине массивов
  // и возвращаем один отсортированный массив
  return [...arrSort, ...arrFirst.slice(i), ...arrSecond.slice(j)];
};

const mergeSort = (arr) => {
  //Если массив содержит один элемент просто возвращаем его
  if (arr.length <= 1) {
    return arr;
  }
  // Находим середину массива и делим его на два
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);
  // Для новых массивов снова вызываем сортировку,
  // сливаем их и возвращаем снова единый массив
  return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

console.log(mergeSort(arr));
