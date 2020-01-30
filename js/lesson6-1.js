// let arr = [1,[2,3],[4,5,[6,7]]]
// console.log(arr.flat(3))
// arr.flatMap()

// let arr = [1, 2, 3]
//
// console.log(arr.map(item => [item * 2].flat()))
// console.log(arr.flatMap(item=>item*2))
//
// let str = ' foo '
// console.log(str.trim())

// function select (regExp, str) {
//   const matches = []
//   for(const match of str.matchAll(regExp)){
//     matches.push(match[1])
//   }
//   return matches
// }

// const arr = [['foo', 1], ['bar', 2]]
// const obj = Object.fromEntries(arr)
// console.log(obj)
// console.log(obj.bar)

const obj = {
  abc: 1,
  def: 2,
  ghksks: 3
}
console.log(Object.entries(obj)) // 0: ["abc", 1], 1:["def", 2]
let res = Object.fromEntries(
  Object.entries(obj).filter(([key, val]) => key.length === 3)
)
console.log(res) // {abc: 1, def: 2}
