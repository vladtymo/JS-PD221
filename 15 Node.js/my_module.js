const os = require('os');

exports.showMessage = function (login) {
    console.log(`Hello, dear: ${login || os.userInfo().username}`);
}

// module.exports = {
//     showMessage
// }