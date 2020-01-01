// function loadScript (src, callback) {
//   let script = document.createElement('script')
//   script.src = src
//   script.onload = () => {
//     callback(src)
//   }
//   document.head.append(script)
// }
//
// function test (name) {
//   console.log(name)
// }
// loadScript('./1.js', function (script) {
//    loadScript('./2.js', function (script) {
//        loadScript('./3.js', function (script) {
//
//        })
//    })
// })
// function loadScript (src) {
//   // pending, undefined
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src) // fulfilled, result = src
//     script.onerror = (err) => reject(err)// rejected, error
//     document.head.append(script)
//   })
// }
//
// loadScript('./1.js')// 1
//   .then(() => {
//      return loadScript('./4.js')
//   }, (err)=> {
//      console.log(err)
//   })
//   .then(()=>{
//      loadScript('./3.js')
//   }, (err)=>{
//      console.log(err)
//   })

// promise.then(onFulfilled, onRejected) onFulfilled=resolve onRejected=reject
//
// function test (bool) {
//   if (bool) {
//     return new Promise((resolve, reject) => {
//       resolve(30)
//     })
//   } else {
//     return Promise.reject(new Error('ss'))
//   }
// }
// test(0).then((value) => {
//   console.log(value)
// }, (err) => {
//   console.log(err)
// })

// function loadScript (src) {
//   // pending, undefined
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src) // fulfilled, result = src
//     script.onerror = (err) => reject(err)// rejected, error
//     document.head.append(script)
//   })
// }
//
// loadScript('./1.js')// 1
//   .then(() => {
//      return loadScript('./4.js')
//   })
//   .then(()=>{
//     return loadScript('./3.js')
//   }).catch((err)=>{
//     console.log(err)
// })

// catchはpromiseがrejectedになったのエラーを捕獲

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

Promise.all([p1, p2, p3]).then((value)=>{
  console.log(value)
})

// const p1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(1)
//     }, 1000)
//   })
// }
// const p2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(2)
//     },500)
//   })
// }
//
// Promise.race([p1(), p2()]).then((value)=>{
//   console.log(value)
// })
