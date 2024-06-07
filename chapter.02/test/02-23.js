let obj1 = { name: '박문수 ', age: 29 };
let obj2 = {};

obj3 = { ...obj1, email: 'mspark@gmail.com' };
console.log(obj3);

let arr1 = [100, 200, 300];
let arr2 = ['Hello', ...arr1, 'world'];
console.log(arr1);
console.log(arr2);
