// ------------- console -------------
console.log("Some information message!");
console.warn("Some warning message!");
console.error("Some error message!");

// ------------- variables -------------
let price = 1300;                   // number
let koef = 44.05;                   // number
let length = 1000000n;              // BigInt

let isValid = true;                 // Boolean

let login = "hello_js";             // string
let name = 'My name is "Vlad"';     // string
let letter = 'A';                   // string

let undefVar = undefined;           // undefined
let activeUser = null;              // null

let user = { id: 3344, login: "vladdd" }; // object
user.id = 4455;

let add = function (a, b) { console.log(a + b); } //  function
let mult = (a, b) => console.log(a * b);

let arr = [10, -3, 0, "red", true, [1, 2, 3], add]; // len: 8

arr[0];     // 10
arr[5][0];  // 1
add(4, 6);
arr[6](9, 3);

// add new item
arr.push(900);
console.log(arr.length); // len: 8

let myID = Symbol("3322-4");
let yourID = Symbol("3322-4");

// typeof - check data type
console.log(typeof (price));
console.log(typeof (undefVar));
console.log(typeof (activeUser));
console.log(typeof (add));
console.log(typeof (arr));

// dynamic typing / weak typing (duck typing)
price = "4200$";        // change number to string
console.log(typeof (price));

if (myID == yourID) { } // false

// ------------ const
koef = 39.99;
koef += 10;
koef++;

console.log(koef);

const id = 5099;
// id += 1; - error

// Math - object with math methods and constants
Math.random(); // return random value in range [0...1): 0.4756834

// ------------- scopes: local, global, function
let globalVar = 45;

if (true) {
    let localVar = 70;
}

function test() {
    let funcVar = 33;

    if (true) {
        let localVar = 70;
    }
}

console.log(globalVar);     // yes
//console.log(localVar);    // no
//console.log(funcVar);     // no

// ------------- operators
let str1 = "First";
let str2 = "Second";

// string concat: str + str
console.log(str1 + str2); // FirstSecond

// interpolation: `...${expression}...`
console.log(`Hello, dear ${login}!`);

// ----------------- statements -----------------
if (koef > 0) {

} else if (false) { }
else { }

switch (login) {
    case 'blabla':
        break;

    default:
        break;
}

for (let i = 0; i < arr.length; i++) {
}

console.log(`Koef is ${koef >= 20 ? "big" : "small"} !`);

// ----------------- browser dialogs -----------------
alert("Alert mesage!");
const email = prompt("Enter your email: ");

// convert string to number: +"str"
const year = +prompt("Enter current year: ");

console.log("Current year: ", year);
console.log("Next year: ", year + 1);

let exit = confirm("Do you want to exit?");

if (exit) console.log("Have a good day!");
else console.log("Let's continue!");
