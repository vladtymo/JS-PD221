// ----------------------- let / const -----------------------

// 1 - we can use before declaration
console.log(number); // undefined

var number = 10;
// 2 - we can recreate variable with the same name
var number = 20; // allow

//console.log(str); // error
let str = "hello ES6";
//let str = 'goodbye var'; // error

// 3 - [var] has function scope / [let] has block/local scope {...}
function TestScope() {

    console.log(varValue);   // undefined
    //console.log(letValue); // error

    if (4 > 2) {
        var varValue = 45;
        let letValue = 55;
    } // end of block

    console.log(varValue);   // 45
    //console.log(letValue); // error
}

TestScope();

// [var] as a loop variable
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(`Current i: ${i}`); // 10, 10, 10...
    }, 1000)
}

// [let] as a loop variable
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(`Current i: ${i}`); // 1, 2, 3...
    }, 1000)
}

console.log("Continue...");

// ----------------------- destructuring -----------------------
// split array / object to a separate variables

let colors = ['white', 'black', 'blue', 'gray', 'yellow'];

// const light = colors[0];
// const dark = colors[1];

const [light, dark, , , accent] = colors;

console.log("Light color:", light);
console.log("Dark color:", dark);
console.log("Accent color:", accent);

function getStudentMarks() {
    return [5, 6, 12, 10, 4, 3, 11];
}

const [firstMark, ...others] = getStudentMarks();
console.log("First student mark:", firstMark);
console.log("Others marks", others);

let rectangle = {
    width: 10.5,
    height: 34.2,
    name: "Black box",
    color: 'red'
    //...
};

// const w = rectangle.width;
// const h = rectangle.height;
// const name = rectangle.name;
const { name, width: w, height: h } = rectangle;

console.log(`${name} rectangle size: ${w}x${h}cm`);

// function parameter destructuring
function showArea({ width, height }, title) {

    // const { width, height } = object;

    console.log(`----- ${title} -----`);
    console.log(`Area = ${width * height}cm^2`);
    console.log(`Perimeter = ${(width + height) * 2}cm`);
}

var door = {
    material: "Wood",
    width: 95,
    height: 230,
    color: "Brown",
    vendor: "BBC"
}

showArea(rectangle, "Rectangle info");
showArea(door, "Bedroom Door info");

function useState() {
    return [120, "hello", () => console.log("Func!")];
}

// destructuring React hook function
const [num, word, func] = useState();

console.log("Number = ", num); // arr[0]
console.log("Word = ", word);  // arr[1]
func();                        // arr[2]()

// ----------------------- spread -----------------------
// spread operator syntax: ...object/array

function showRange(min, max) {

    let result = '';
    for (let i = min; i <= max; ++i) {
        result += i + ' ';
    }
    console.log("Range:", result);
}

let numbers = [33, 44, 55];

showRange(...numbers);  // numbers[0], numbers[1]

const arrayCopy = [...numbers];

console.log("Copy arr:", arrayCopy);

let newArray = [-1, ...numbers, 6, 3];
console.log("Concatenated:", newArray);

let obj = {
    positives: [1, 2, 3],
    negatives: [-1, -4, -120]
};

let combinedArr = [...obj.positives, ...obj.negatives];
console.log("Combined Arr:", combinedArr);

// create array copy with new item at the end
function pushItem(arr, item) {
    return [...arr, item];
}

const larger = pushItem(numbers, 88);
console.log(larger);

//  ----------------------- ...rest operator -----------------------
// ! we can use the rest operator on the last parameter position
function showMarks(studentName, age, ...marks) {
    console.log(`${studentName} ${age} years old has marks: ${marks}`);
}

showMarks('Bob', 16, 12, 8, 5, 6, 10, 6, 8);

const admin1 = {
    login: "super_user",
    password: "Qwerty",
    role: 'admin',
    email: 'temp@outlook.com'
};

let admin2 = {
    // login: admin1.login,
    // password: admin1.password,
    // role: admin1.role,
    ...admin1,
    email: 'new@gmail.com', // overwrite email value
    address: 'Rivne, Ukraine' // create new property
};

console.log(`Admin 2: ${admin2.login}, ${admin2.email}`);
console.log(Object.keys(admin2));
console.log(Object.values(admin2));

// ------------------ Symbol ------------------
let myId = Symbol("123");
let yourId = Symbol("123");

console.log(myId == yourId); // false

myId = Symbol.for("123");   // create globally
yourId = Symbol.for("123"); // using existing global object

console.log(myId == yourId); // true

yourId = myId;
console.log(myId == yourId); // true

let data_key = Symbol(56478389);

const collection = {
    length: 10,
    [data_key]: [1, 5, 7, 10]
}

console.log(collection.data_key);           // undefined
console.log(collection[Symbol(56478389)]);  // undefined
console.log(collection[data_key]);          // [...]

// Object.defineProperty(collection, data_key, {
//     enumerable: false,
//     value: [1, 5, 7, 10]
// });

// get iterator of the element
// list[Symbol.iterator]
