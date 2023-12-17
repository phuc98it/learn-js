/** Function là Object */
const x = function(thamso) {
    return this.name + " - " + thamso;
}

const object1 = {name: "name_1"}
const object2 = {name: "name_2"}

console.log(x.call(object1, "tham số 1"));
console.log(x.call(object2, "tham số 1"));

//Bài Toán : ???


/** Callback */
function callback() {
    console.log("Đây là callback")
}

function cha(thecallback) {
    console.log("Cha - chạy trước khi gọi Call Back");
    setTimeout(() => {
        thecallback();
        // console.log("end");
    }, 200);

    console.log("end2");
}

cha(callback);


/** Constructor */
function Constructor(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}

const name1 = new Constructor("Vuong");
console.log(name1.getName());

// Thêm property/function cho Constructor = từ khóa 'prototype'
Constructor.prototype.age = 30;

Constructor.prototype.me = function () {
    return this.name + " - " + "Hàm Me"
}

console.log(name1.age)
console.log(name1.me())