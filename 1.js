var firstName="Shoaib Khan";
console.log(firstName[0]);
console.log(firstName[3]);
console.log(firstName[firstName.length-1]);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

var firstName="  Shoaib  Khan  ";

console.log(firstName.trim());

//type CAsting

let numStr="110";
let num=512;
console.log(typeof numStr);
console.log(typeof num);

//TYpe Casting to string

let numInStr = String(num)
let numInStrTwo = num+'';
console.log(numInStr, typeof numInStr);
console.log(numInStr, typeof numInStrTwo);

//type CAsting to integar

let numInInt = Number(numStr)
let numInIntTwo = +numStr;
console.log(numInInt, typeof numInInt);
console.log(numInIntTwo, typeof numInIntTwo);
