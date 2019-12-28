// ディフォルトパラメータ
// function f (x, y, z=x + y) {
//    console.log(f.length)
//    return x * 10 + z // 10 + 8
// }
// console.log(f(1, undefined, 1))
// function sum() {
//    let num = 0
//    Array.from(arguments).forEach(item => {
//       num += item * 1
//    })
//    return num
// }
// console.log(sum(1,2,3))

// function sum (base, ...nums) {
//    //Rest parameter
//    let num = 0
//    nums.forEach(item=>{
//       num += item
//    })
//    return base *2 + num
// }
// console.log(sum(1, 2, 3, 4))

// function sum (x=1, y=2, z= 3) {
//    return x + y + z
// }
// let data = [4,5,6]
// console.log(sum(...data))

// let hello = (name, city) => {
//    console.log('hello world', name, city)
// }
// hello('imooc', 'beji')

// let num = (x,y,z)=> {
//    return {
//       x,y,z
//    }
// }
// console.log(num(1,2,3))

// let test={
//    name:'test',
//    say: ()=>{
//       console.log(this.name)
//    },
//    say1: function () {
//       console.log(this.name)
//    }
// }
// test.say1()

// let sort = (list) => {
//   return list.sort()
// }
//
// console.log(sort([2, 3, 1]))
function test (a, b = 1, c) {
  console.log(arguments.length)
}
test('a', 'b')
