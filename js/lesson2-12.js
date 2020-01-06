// function loop () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }
// }
// loop()

// function * loop () {
//   for (let i = 0; i < 5; i++) {
//     yield i
//   }
// }
// const l = loop()
// for (let x of l) {
//   console.log(x)
// }

// function * gen () {
//   let val
//   val = yield * [1, 2, 3]
//   console.log(val)
// }
//
// const l = gen()
// console.log(l.next()) // {value: 1, done: false}
// console.log(l.next()) // {value: 2, done: false}

function * gen () {
  let val
  val = yield [1, 2, 3]
  console.log(val)
}

const l = gen()
console.log(l.next(10))
console.log(l.next(20))
let say = () => {

}
