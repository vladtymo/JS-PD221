// ----------------- functions -----------------
// ---- 1: function declaration
function isEven(num) {
    return num % 2 === 0;
}

// 2: function expression
const isOdd = function (num) { return num % 2 !== 0; }

// 3: arrow function
const invert = (n) => n * -1;

// 4: using new Function
const summ = new Function('a', 'b', 'return a + b');

// ------------- callback function
function changeArray(arr, func) {
    for (let i = 0; i < arr.length; i++) {

        arr[i] = func(arr[i]);

    }
}

const numbers = [4, 2, 6, -1, 9, 10, -6, 22];

changeArray(numbers, invert);
changeArray(numbers, (n) => n * n);

console.log("Numbers: " + numbers);

// ------------- hoisting
myFunc(4, 12);
function myFunc(a, b) { console.log(a + b) };
myFunc(3, 6);

// ------------- closure
function test() {
    let a = 10;
    let b = 20;

    return function () {
        ++b;
        return a + b;
    };
}

const next = test();

console.log(next()); // 31
console.log(next()); // 32
console.log(next()); // 33
