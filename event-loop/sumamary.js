const fs = require('fs');
const https = require('https');

console.log("1: \tSTART: HOC CO BAN");

setTimeout(() => {      // Timer
    console.log("2. \tsetTimeout 1", 0);
});

setImmediate(() => {    // Check  
    console.log("3. \tsetImmediate");
});

https
    .get("https://www.google.com/")