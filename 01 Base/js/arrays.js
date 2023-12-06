// -=-=-=-=-=-=-=-=- arrays -=-=-=-=-=-=-=-=-
// initialization type 1
var array = new Array();
array[0] = 100;
array[1] = 200;
array[2] = 300;

//var array = new Array(3); // lenght: 3
var array = new Array(6.5, 2.2, 0, 100);

for (let i = 0; i < array.length; i++) {
    console.log(`Element[${i}]: ${array[i]}`);
}

// initialization type 2
var array = []; // empty array
var array = [3, -5, 123, 44, -1, 23, 123, 66]; // Lenght: 8

array[0] = 44;
console.log(array[0]); // 44

console.log("Before: " + array);
array[5] = 60;
console.log("After: " + array);

array[20] = 55;
// [8]...[19]: undefined
console.log("Array: " + array);

console.log(`Array lenght: ${array.length}`);

// for (let i = 0; i < array.length; i++) {
//     console.log(`Element[${i}]: ${array[i]}`);
// }

// // ignore undefined elements
// array.forEach((elem, ind) => {
//     console.log(`Element[${ind}]: ${elem}`);
// });

// console.log("for in");
// // iterate over keys: 0, 1, 2, 3, 4...
// for (const key in array) {
//     console.log(key);
// }

// let user = {
//     id: 1200,
//     login: 'super_mega',
//     admin: false
// }

// for (const property in user) {
//     console.log(property);
//     // property - name
//     // user[property] - value
//     console.log(" - ", user[property]);
// }

// console.log("for of");
// // iterate over values: 3, -5, 123, 44...
// for (const value of array) {
//     console.log(value);
// }

// // -=-=-=-=-=-=- Array Methods -=-=-=-=-=-=-
console.log("Original Array: ", array);

array.push(777); // add element to the end
console.log("Array:", array);

array.pop(); // remove the last element
console.log("Array:", array);

array.shift(); // remove the first element
console.log("Array:", array);

array.unshift(555); // add to the beginning
console.log("Array:", array);

console.log("Index of first 123:", array.indexOf(123));  // if not found: -1
console.log("Index of last 123:", array.lastIndexOf(123));

function isNegative(n) {
    return n < 0;
}

console.log("Found:", array.find(isNegative));
console.log("Found:", array.find(function (n) { return n < 0; }));
console.log("Found:", array.find((n) => n < 0));

// lexycographic sorting
array.sort();
console.log("Sorted by default:", array);

// compare result:
// 0 - items are equals
// <0 - less
// >0 - bigger
array.sort((a, b) => a - b);
console.log("Sorted with custom func:", array);

const copy = array.slice(1, array.length - 1);
console.log("Copied array:", copy);

array.splice(2, 3); // 3 element from index 2
console.log("After remove:", array);

array = [4, 6, 8, 1, 13, 16, -4, 0, 99];

const filtered = array.filter((el) => el % 2 == 0);
console.log("Filtered array:", filtered);

const mapped = array.map(i => i * i);
console.log("Mapped array:", mapped);

const colors = ['red', 'brown', 'green', 'gold', 'silver'];

const str = colors.join(" - ");
console.log("Str after join: ", str);

console.log("Elements after split: ", str.split(' - ').length);

array.fill(777, 5, 7);
console.log("Filled array:", array);

// reduce - aggregate all elements in array

array = [4, 3, 6, -1, 0, 99, 120, 45];

// res: 0
// item: 4
let result = array.reduce((res, item) => item > res ? item : res, 0);
let abbr = colors.reduce((res, item) => res + item[0], "");

console.log("Result:", result);
console.log("Abbr:", abbr.toUpperCase());
