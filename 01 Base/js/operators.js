// ------------ operators ------------
// ariphmetic operators

console.log(`a + b: ${5 + 3}`); // 8
console.log(`a - b: ${5 - 3}`); // 2
console.log(`a * b: ${5 * 3}`); // 15
console.log(`a / b: ${20 / 4}`); // 5
console.log(`a % b: ${23 % 7}`); // 23 / 7 = 3... = 2

// exponentiation **
console.log(`a ** b: ${2 ** 8}`); // 256

// logic operators
// always returns boolean type (true/false)
console.log(`a > b: ${5 > 3}`); // true
console.log(`a < b: ${5 < 3}`); // false
console.log(`a >= b: ${5 >= 3}`); // true
console.log(`a <= b: ${20 <= 20}`); // true

console.log(`Bob > Oleg: ${'Bob' > 'Oleg'}`); // false
console.log(`Bob > Bobich: ${'Bob' > 'Bobich'}`); // false

console.log(`a == b: ${'5' == 5}`); // true
console.log(`a != b: ${5 != 3}`); // true
// strict - compare types also
console.log(`a === b: ${'5' === 5}`); // false
console.log(`a !== b: ${5 !== 3}`); // true

// falsy values: false, 0, null, undefined, "", '', NaN
console.log(`null == undefined: ${null == undefined}`); // true
console.log(`null === undefined: ${null === undefined}`); // false

let value = "";

if (value) {
    console.log("value is True");
} else {
    console.log("value is False");
}

let salary = 1300, bonus = 80;

console.log("Bonus:", bonus); // 80
console.log("Bonus:", bonus); // 91

// salary = 1300

//salary = salary + bonus;
// ------------- change operators: += -= *= /= %=
salary += bonus;


// salary = salary + 1;
// salary += 1;
// salary--;
// ------------- increment / decrement operators: ++ --
// 1 - prefix: ++value (high priority)
// 2 - postfix: value++ (low priority)

salary = 2000;
console.log("Original Salary: ", salary);

let copy = ++salary;

console.log("Salary: ", salary); // 2001
console.log("Copy: ", copy); // 2001

// ------------- type conversion
let invalidNumber = NaN;

// to boolean: Boolean(value) !!value

salary = null;

console.log("Salary as bool:", Boolean(salary)); // false
console.log("Salary as bool:", !!salary);       // false

console.log("NaN as bool:", !!NaN);
console.log("Boolean of NaN: ", Boolean(NaN) == false);

if (invalidNumber) console.log("True");
else console.log("False");

// to number: +value Number(value)
//let number = +"123";
let number = Number("354");

console.log(number); // 354
console.log(isNaN(number));
console.log("Type of variable:", typeof (number));

let age = +prompt("Enter your age:");
// age - NaN

if (Number.isNaN(age)) {
    console.warn("Age is invalid. Please enter digits only!");
}

console.log("isNaN: ", isNaN("123hello"));               // true: convert value to Number and check is NaN
console.log("Number.isNaN: ", Number.isNaN("123hello")); // false: only check is it equals to NaN

// to integer: parseInt(value)
// to real: parseFloat(value)
console.log(parseInt("34.99")); // 34
console.log(parseFloat("34.99")); // 34.99

console.log("Red" + "Green");

console.log("34" + 1); // 341
console.log("34" + false); // 34false
console.log("34" - 1); // 33
console.log("5" * 2); // 10
