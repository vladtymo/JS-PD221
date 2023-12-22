const btn = document.querySelector('#testBtn');

btn.onclick = () => {
    textBlock.innerHTML += `<span>*</span>`;
}

// -=-=-=-=-=-=-=- Callbacks -=-=-=-=-=-=-=-
console.log("Before process!");

setTimeout(() => {
    let result = 1;
    for (let i = 1; i < 6; i++) {
        result *= i;
    }
    console.log("Factorial of 6 = ", result);

    setTimeout(() => {
        console.log("Pow: ", Math.pow(2, 16));
    }, 1000); // wait 3 sec (2s + 1s)

}, 2000); // wait 2 sec

// states: pending -> fullfiled / rejected

// automatically start async operation
const task = new Promise((resolve, reject) => {

    // 

    // do something...

    console.log("Promise has started!");
    let num = Math.round(Math.random() * 100);

    // num > 10 - success
    // else - reject

    // hard work ~ 10 sec
    if (num < 10)
        reject(new Error("Invalid number!"));           // set rejected state
    else
        resolve({ name: "random number", value: num }); // set fullfiled state
});

// -------- asynchronous waiting for promise result
task.then((data) => {
    console.log("Result (.then 1):", data);
}).catch((err) => {
    console.warn(err.message);
});

function hardWork() {
    return new Promise((res, rej) => {
        let num = Math.round(Math.random() * 100);
        if (num < 10)
            rej(new Error("Invalid number!"));
        else
            res({ name: "random number", value: num });
    });
}

// async function (it returs new promise)

// 1 - handle using .then()
hardWork()
    .then(result => console.log("Result (.then 2):", result))
    .catch(err => console.warn(err.message));

// 2 - handle using async/await

// IIFE
(async function () {
    const result = await hardWork();
    console.log("Result (await 1):", result);
}());

async function test() {
    const result = await hardWork();
    console.log("Result (await 2):", result);
}
test();


// --------- fetch() - async funciton for sending server requests
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        console.log("Status code:", res.status);
        return res.json();
    })
    .then(data => {
        console.log(data);
    });

// ---------- Promise
// create syntax: new Promise((resolve, reject) => {});
// create and automatically start the Promise

// create the promise that return 4^8
// const hardWork = new Promise((resolve, reject) => {
//     // do work...

//     console.log("Start doing hard work...");
//     if (Math.random() < 0.5)
//         reject("Something went wrong!"); // error
//     else {
//         setTimeout(() => {
//             const result = Math.pow(4, 8);
//             resolve(result); // success result
//         }, 1000);
//     }
// });

// create the promise that grenerate users and return them
// const getUsers = new Promise((res, rej) => {

//     if (Math.random() < 0.3)
//         rej("Something went wrong with user generation!");

//     // create user array
//     const users = [];
//     for (let i = 0; i < 1000000; i++) {
//         users.push({ id: 1000 + i, name: `Test${i}` });
//     }

//     res(users);
// });

// -------- .then() - handling the promise result
// Promise states: pending -> fullfiled / rejected

// handle hardWork promise
// hardWork.then((res) => {
//     console.log("Finish hard work! Result =", res);
// }).catch((err) => {
//     console.warn(err);
// });

// handle getUsers promise
// getUsers.then((users) => {
//     console.log("Users generated succesfully");
//     console.log(users);
// }).catch((err) => {
//     console.warn(err);
// });

// TASK: get data from the database asynchronously
// function getActiveUser(ip) {
//     return new Promise((res, rej) => {
//         if (ip === '198.0.0.3')
//             setTimeout(() => {
//                 b = 30;
//                 res({ id: 1002, login: 'vlad ' });
//             }, 1800);
//         else
//             rej(new Error("Invalid IP address!"));
//     });
// };

const ip = "198.0.0.3"; //prompt("Enter IP:");

// getActiveUser(ip)
//     .then(res => {
//         console.log("Active user:", res);
//         return getActiveUser("0.0.0.0");
//     })
//     .then((res) => console.log(res))
//     .catch(err => console.log(err.message));

// ------------ Promise methods
// Promise.all([hardWork]).then((values) => {
//     console.log("All promises have done!");
// }).catch((err) => console.log(err));

// ------- fetch()
// const res = fetch("https://jsonplaceholder.typicode.com/users");

// res.then((res) => {
//     // on fullfiled:
//     console.log(res.status);
//     return res.json();
// }).then((users) => {
//     // on fullfiled:
//     console.log(users);
//     resultBlock.innerHTML += `<p>${users[0].name}</p>`;
// });

// console.log("Finish");

// ------------- [async] & [await] -------------
// introduced in ES8
// [await] - wait the promise asynhronously
// [async] - allows to use await operator in function 

async function showActiveUser() {
    // getActiveUser("198.0.0.3")
    //     .then((user) => {
    //         console.log(user);
    //         document.body.innerHTML += `<p>Active user: ${user.login}</p>`;
    //     });

    const user = await getActiveUser("198.0.0.3");

    // ... continue when the promise is finished

    console.log(user);
    document.body.innerHTML += `<p>Active user: ${user.login}</p>`;
}

//showActiveUser();

// TASK: get users from the server
async function showUsers() {

    // 1 - handle with .then()
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(data => {
    //         console.log(data.status);
    //         return data.json();
    //     })
    //     .then(users => console.log(users));

    // 2 - handle with [await]
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(data.status);

    const users = await data.json();
    console.log(users);
}

//showUsers();

//... continue ...
console.log("After process! Continue...");
