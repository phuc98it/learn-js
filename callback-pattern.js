/** Callback Pattern
 * Pattern : được tạo ra nhằm mục địch viết code dễ  bảo trì hơn.
 * Tuy hơi dài nhưng dễ  dàng kiểm soát và mở rộng code.
 */

function cong (a, b) {
    return a + b;
}

function tru (a, b) {
    return a - b;
}

function nhan (a, b) {
    return a * b;
}

function chia (a, b) {
    return a / b;
}

function maytinh(x, y, callback) {      // Pattern
    return callback(x,y);
}

const test = maytinh(3, 4, function(param1, param2) {
    return param1 ** param2
})

console.log(`testing: ${test}`)         // 3^4 = 81

const nhan_test = maytinh(3, 4, nhan);
console.log(`nhan = ${nhan_test}`)      // 12


// ================================

function truoc(callback) {
    setTimeout(function() {
        console.log("task 1")
        callback()
    }, 2000);
}

function sau() {
    setTimeout(function() {
        console.log("task 2")
        // callback()
    }, 1000);
}

// truoc()
// sau()

// console.log("task 3")

let task3 = "task 3"

truoc(sau)

// => Callback: giúp cho dev viết code bất đồng bộ chạy dễ  dàng.