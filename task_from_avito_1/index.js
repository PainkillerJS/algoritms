// Дан массив целых чисел и целое число k. Найти k наиболее часто встречающихся элементов.
// Пример
// Ввод:   nums = [1,1,1,2,2,3], k = 2
// Вывод: [1, 2] в любом порядке]

const a = (nums, k) => {
  const hash = {};
  const arr = [];
  const result = [];
  
  for(let i = 0; i < nums.length; i++){
    const num = nums[i];
    
    hash[num] = num in hash ? hash[num] + 1 : 1;
  }
  
  for(let key in hash){
    const entity = arr[hash[key]];
    
    if(Array.isArray(entity)){
      entity.push(key);
    } else {
      arr[hash[key]] = [key];
    }
  }

  let key = arr.length - 1;
  
  while(key !== -1 && k !== 0){
    if(Array.isArray(arr[key])){
      for(let i = 0; i < arr[key].length; i++){
        
        if(k === 0){
          return result;
        }
  
        result.push(arr[key][i]);
        k--;        
      }
    }
    
    key--;
  }  
  
  return result;
}

console.log('test 1')
console.log(a([1,1,1,2,2,3,2], 2))

console.log('test 2')
console.log(a([1,1,1,2,2,3,2, 5,5,5,5,5,5,5,5,5,5], 20))

console.log('test 3')
console.log(a([], 20))

console.log('test 4')
console.log(a([1], 20))

console.log('test 5')
console.log(a([0,0,0,0,0], 20))



