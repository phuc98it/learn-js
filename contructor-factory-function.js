
/** Contructor Function */
function Construct(name, age) {
    this.name = name;
    this.age = age;
    this.ten = function() {
        return `Ten: ${this.name}`
    }

    this.tuoi = function() {
        return `Tuoi: ${this.age}`
    }
}

const p1 = new Construct('test_1', 30)

const p2 = new Construct('test_2', 32)

console.log(" =================== ")
console.log(p1.name)
console.log(p1.age)
console.log(p1.ten())
console.log(p2.name)
console.log(p2.age)
console.log(p2.tuoi())


/** Factory Function */
function Factory(name, age) {
    let priavteVar = 100;

    function ten() {
        return "Ten: " + name;
    }

    function tuoi() {
        return "Tuoi: " + age;
    }

    return {
        ten: ten,
        tuoi: tuoi,
        data: priavteVar
    }
}

console.log(" =================== ")
const obj1 = Factory("name_1", 20)
const obj2 = Factory("name_2", 22)

console.log(obj1.ten())
console.log(obj2.ten)
console.log(obj1.data)
console.log(obj2.data)
console.log(obj1.tuoi)
console.log(obj2.tuoi())