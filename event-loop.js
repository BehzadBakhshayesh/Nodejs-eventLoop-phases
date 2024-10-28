const fs = require('fs');
const crypto = require('crypto');

console.log('0 top level code');

setTimeout(() => { console.log('1'); }, 0);


fs.readdir('test.txt', () => {
    console.log("2")
    console.log("------------")

    setTimeout(() => { console.log('21'); }, 0);
    global.setImmediate(() => { console.log('22'); })

    process.nextTick(() => console.log("nextTick"))
    crypto.pbkdf2('password', 'salt', 10000, 1024, "sha512", () => {
        console.log('crypto');

    })

})


global.setImmediate(() => { console.log('3'); })


