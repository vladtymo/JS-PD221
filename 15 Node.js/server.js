// import module: require(module_name)

const http = require('http');

const server = http.createServer((request, response) => {

    // request  - contains client request data
    // response - return result data to the client
    console.log("Got a reguest from client!");

    switch (request.method) {
        case "GET":
            response.statusCode = 200; // OK
            response.setHeader('Content-Type', 'text/plain');
            response.end("Hello from GET case!");
            break;

        case "POST":
            response.statusCode = 200; // OK
            response.setHeader('Content-Type', 'text/plain');
            response.end("Hello from POST case!");
            break;
        default:
            break;
    }
});

server.listen(3344, "127.0.0.1", () => {
    console.log("Server is now listening http://127.0.0.1:3344");
});