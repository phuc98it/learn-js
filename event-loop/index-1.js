console.log("Code dong bo 1");

setTimeout(() => {
    console.log("day la setTimeout");
}, 0)

Promise.resolve().then(() => {
    console.log("Day la Promise 1");
})

queueMicrotask(() => {      // Node-11 support
    console.log("day la queueMicrotasl");
})

Promise.resolve().then(() => {
    console.log("Day la Promise 2");
})

console.log("Code dong bo 2");