/** Higher Order Function */
function cha() {
    let x = 10;
    return function con(p) {
        x++;
        return x + p;
    }
}

console.log(cha());     // -> 

console.log(cha()(2));  // -> 13

const bien = cha()      // 10

console.log(bien(1))    // 12 = (10 + 1) + (1) 

console.log(bien(3))    // 15 = 12 + 3



///////////////////////////////////////////////////
function a(x) {
    x++;
    return function b() {
        ++x;
        return function c() {
            console.log(++x);
        }
    }
}

const z = a(1);
console.log(z()())
console.log(z()())
console.log(z()())


/** Factory Function: ham dung */
function tinhtoan(x) {
    return function add(y) {
        console.log(x + y)
    }
}

/** Preload Function */
const add10 = tinhtoan(10); 
const add20 = tinhtoan(20);  

add10(5)
add10(15)
add20(10)
add20(20)

/** Currying Function */
function x(x) {
    return function y(y) {
        return function z(z) {
            console.log(x + y + z);
        }
    }
}
x(1)(2)(3)      // thay cho x(1, 2, 3).

// => 1 ham nhieu bien, tao thanh moi ham 1 bien.


/** Closure Function */
function taikhoan(tiencuatoi) {
    let myMoney = tiencuatoi;
    
    return {
        xem: function () {                  // GET()
            return `Ban co ${myMoney}$ trong tai khoan`;
        },
        nap: function (amount) {            // SET(a)
            muMoney = myMoney + amount;
        },
        rut: function (amount) {            // SET(b)
            if (amount > myMoney) {
                return "Het tien !!!"
            }
            myMoney = myMoney - amount;
        }
    }
}

const f = taikhoan(10);

console.log(f.xem());


/** Call Back */
function first(callback) {
    setTimeout(function() {
        console.log(1);
        callback();
    },1000)
}

function second() {
    console.log(2)
}

first(second)