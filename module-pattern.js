/** Module Pattern */

// IIFE: khai báo và thực thi ngay lập tức.
(function iife(x) {
    console.log(`đây là IIFE, tôi là : ${x}`)
})('js.edu')

console.log(" ============================ ")

// -> result: đây là IIFE, tôi là : js.edu

/** Follow
 * 1. Khai báo hàm IIFE
 * 2. Gán vào object.
 *      +) Hàm IIFE trả lại 1 object và thiết lập các public và private data.
 * 3. Truy xuất (excute)
 */

// Thực tế  ứng dụng
var Module = (function() {
    let private = "Đây là private variable";

    function privateFunc() {
        console.log("Đây là hàm private. Updated!");
    }

    let privateFunc2 = function () {
        console.log("Đây là hàm private2. Updated!");
    }

    return {
        publicData : private,

        publicFunc: function() {
            privateFunc()
        },

        publicFunc2 : privateFunc2
    }
})();   // => Object Module đã được 'excute' -> khởi tạo.

console.log(Module.publicData)
console.log(Module.private)
Module.publicFunc()
Module.publicFunc2()


// => Đóng/Mở ngoặc trong hàm sẽ excute thực thi - thiết lập data và thứ tự chạy của chương trình.