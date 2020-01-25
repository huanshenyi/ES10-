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

// function * gen () {
//   let val
//   val = yield [1, 2, 3]
//   console.log(val)
// }
//
// const l = gen()
// console.log(l.next(10))
// console.log(l.next(20))
// let say = () => {
//
// }

// function * loop () {
//   for (let i = 0; i < 5; i++) {
//     yield console.log(i)
//   }
// }
//
// const l = loop()
// l.next()
// l.next()
// l.next()

// function * gen () {
//   let val
//   val = yield 1
//   console.log(val)
// }
// const l = gen()
// l.next()
// l.next()

// function * gen () {
//   let val
//   val = yield [1, 2, 3]
//   console.log(val)
// }
// const l = gen()
// console.log(l.next())
// console.log(l.next())

// function * gen () {
// //   let val
// //   val = yield [1, 2, 3]
// //   console.log(val)
// // }
// // const l = gen()
// // console.log(l.next())
// // console.log(l.return(100))
// // console.log(l.next('a/'))

// function * gen () {
//   while (true) {
//     try {
//       yield 1
//     } catch (e) {
//       console.log(e.message)
//     }
//   }
// }
//
// const g = gen()
// console.log(g.next())
// console.log(g.next())
// g.throw(new Error('s'))
// console.log(g.next())
