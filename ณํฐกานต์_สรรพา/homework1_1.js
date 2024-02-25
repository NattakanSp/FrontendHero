let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.filter((item) => item % 2 === 0).map((item) => item * 1000);
console.log(arr);
console.log(newArr);
