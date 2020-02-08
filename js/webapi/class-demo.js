class Status {
  constructor (name, number) {
    this.name = name
    this.number = number
  }
  sayHi () {
    console.log(
      `Name${this.name}, Number${this.number}`
    )
  }
}

const man = new Status('python', 30)
console.log(man.sayHi())

class Classmember extends Status {
  constructor (name, gender) {
    super(name)
    this.gender = gender
  }
}
const cm = new Classmember('asd', 'odad')
console.log(cm instanceof Object) // true
console.log(cm.__proto__)
console.log(Status.prototype)
console.log(cm.__proto__ === Status.prototype)
console.log(typeof Classmember)
