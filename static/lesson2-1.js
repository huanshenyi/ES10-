// var abc = 1234 //グローバル変数 delete 不可能
// abcd = 2345    //windowの属性  delete 可能
//
// function test(){
//   ab = 45
// }
// test()

// function test () {
//   var a = 3
//   function test2 () {
//     var b = 4
//     return b + a
//   }
//   return test2()
// }
// console.log(test())

// function test () {
//   var a = 3
//   if (a === 3) {
//     let b = 4
//     console.log('abc')
//   } else {
//     console.log('abcd')
//   }
//   console.log(b)
//   return a + 4
// }
// console.log(test())
window.a = 3
function test () {
  console.log(this.a)
}
test()
test.bind({ a: 100 })()
