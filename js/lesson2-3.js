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

// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () {
//     Animal.walk()
//     console.log('i am eat food')
//   }
//   static walk () {
//     console.log('i am walking')
//   }
// }
// let dog = new Animal('dog')
// dog.eat()

// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   Animal.walk()
//   console.log('i am eat food hello')
// }
//
// Animal.walk = function () {
//   console.log('i am walking')
// }
//
// let Dog = function () {
//   Animal.call(this, 'dog')
//   this.run = function () {
//     console.log('i can run')
//   }
// }
// Dog.prototype = Animal.prototype
// let dog = new Dog('dog')
// dog.eat()

// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () {
//     Animal.walk()
//     console.log('i am eat food')
//   }
//   static walk () {
//     console.log('i am walking')
//   }
// }
// class Dog extends Animal {
//    constructor (type) {
//      super(type)
//      this.age = 2
//    }
// }
// let dog = new Dog('dog')
// dog.eat()

class Query {
  constructor (list) {
    this.list = list
  }
  get show () {
    console.log('今の状態:', this.list)
  }
  set push (num) {
    this.list.push(num)
  }
}
const list = [1, 2, 3]
let query = new Query(list)
query.show
query.push = 4
query.show
