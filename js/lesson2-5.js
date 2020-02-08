let x = 1; let y = 2; let z = 3
let obj = {
  x,
  y,
  [z + y]: 5,
  * hello () {
    // console.log('hello')
  }
}
obj.hello()

// Set
let s = new Set()
// let s = new Set([1, 2, 3, 4])
s.add('hello')
s.add('goodbye')
// console.log(s)
// s.delete('hello')
// s.clear()
// console.log(s)
// console.log(s.has('hello'))
// console.log(s.size)
// console.log(s.keys()) //SetIterator {"hello", "goodbye"}
// console.log(s.values())//SetIterator {"hello", "goodbye"}
// console.log(s.entries()) //SetIterator {"hello" => "hello", "goodbye" => "goodbye"}

// s.forEach(item => {
//   console.log(item)
// })

// for (let i of s) {
//   console.log(i)
// }
// let map = new Map()
// map.set(1, 2)
// map.set(2, 4)
// console.log(map) //{1 => 2, 2 => 3}
// map.delete(1)
// console.log(map)
// console.log(map.has(1))
// console.log(map.get(1))
// console.log(map.keys(), map.values(), map.entries())
// map.forEach((value, key) => {
//   console.log("value:" , value, "key:" , key)
// })
// for (let [key, value] of map) {
//   console.log(key, value)
// }
// let o = function () {
// console.log('o')
// }
// map.set(o, 4)
// console.log(map.get(o))

const target = { g: { a: { b: { c: { d: 9 } }, e: 5, f: 6, h: 10 } } }
const source = { a: { b: { c: { d: 1 } }, e: 2, f: 3 } }
Object.assign(target, source)
console.log(target, 'target')
console.log(source, 'source')

const t1 = undefined
const s1 = { a: 1 }
Object.assign(t1, s1)
console.log(t1, 't1')
console.log(s1, 's1')
