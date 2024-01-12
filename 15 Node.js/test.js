const utils = require("./my_module");

utils.showMessage("vlad");
utils.showMessage();

console.log("Hello Node.js!");

let a = 10, b = 20;
console.log("Result: ", a * b);

// ------ document is not defined
// document.createElement('ul')
// document.querySelector("body").append();

// local scope (access inside this module)
let email = "example@gmail.com";

// global scope
global.login = "super1122";

// common commands: 
//      npm init - create initial pachage.json file
//      npm install <package_name> - install package
//      node <file_path> - run js file with Node.js
//      nodemon <file_path> - run js file with nodemon