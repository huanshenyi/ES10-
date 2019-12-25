// let Animal = function (type) {
//   this.type = type
// }
//
// Animal.prototype.eat = function () {
//   console.log('i am eat food')
// }
//
// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog)
// console.log(monkey)
//
// monkey.constructor.prototype.eat = function () {
//   console.log('error')
// }
// dog.eat()
// monkey.eat()
// let _age = 4
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   get age () {
//     return _age
//   }
//   set age (val) {
//     if (val < 7) {
//       _age = val
//     }
//   }
//   eat () {
//     console.log('i am eat food')
//   }
// }
// let dog = new Animal('dog')
// console.log(dog.age)
// dog.age = 5
// console.log(dog.age)

class Animal {
  constructor (type) {
    this.type = type
  }
  eat () {
    Animal.walk()
    console.log('i am eat food')
  }
  static walk () {
    console.log('i am walking')
  }
}
let dog = new Animal('dog')
dog.eat()
