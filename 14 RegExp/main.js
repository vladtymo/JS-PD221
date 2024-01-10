// -=-=-=-=-=-=-=- Regular Expressions -=-=-=-=-=-=-=-

//const pattern = new RegExp('[A-Z]+');

/* Anchors
    ^ - start of the string
    $ - end of the string
*/
let pattern = /^[A-Za-z0-9][\w\.-]{2,}[A-Za-z0-9]\@\w+\.\w+$/;

// TASK: validate client email address
let email = prompt("Enter your email address:", 'vladtm@gmail.com');

console.log("Test email: ", pattern.test(email));

while (!pattern.test(email)) {

    console.warn("Invalid email address! Please, try again.");
    email = prompt("Enter email address again:");
}

// test() - returns true/false
// exec() - returns next match or null

/* Falgs: 
    g - global (return all matches)
    i - case insensetive
    m - multiline
*/

// TASK: validate group name: GF-45 HH-12
pattern = /([A-Z]{2})-\d{2}/g;

const text = "Hello! Group PS-44 has 12 students! RJ-45, YY-10 also.";

let match = null;
while ((match = pattern.exec(text)) != null) {
    console.log("Match:", match);
}

console.log("First match:", pattern.exec(text));  // PS-44
console.log("Second match:", pattern.exec(text)); // RJ-45
console.log("Third match:", pattern.exec(text));  // YY-10
console.log("Fourth match:", pattern.exec(text)); // null

pattern.lastIndex = 0; // reset index
console.log("Others matches:", Array.from(text.matchAll(pattern)));

console.log("Replaced string:", text.replace(pattern, "$1-XX"));

// TASK: get all words from the line
const line = "?Hello, Vlad! How are you? Fine.";

// words: Hello Vlad How...
const words = line.split(/[,.\s!?]+/).filter(x => x !== "");

console.log("Words:", words);
