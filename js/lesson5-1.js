function Gen (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}

// async function test () {
//   let arr = [Gen(2000), Gen(100), Gen(3000)]
//   for (let item of arr) {
//     console.log(Date.now(), await item.then(console.log))
//   }
// }
//
// test()

// async function test () {
//   let arr = [Gen(2000), Gen(100), Gen(3000)]
//   for await (let item of arr) {
//     console.log(Date.now(), item)
//   }
// }
//
// test()

// const obj = {
//   count: 0,
//   Gen (time) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({ done: false, value: time })
//       }, time)
//     })
//   },
//   [Symbol.asyncIterator] () {
//     let self = this
//   }
// }
