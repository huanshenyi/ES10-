let x = 1; let y = 2 ; let z = 3
let obj = {
  x,
  y,
  [z+y] : 5,
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
console.log(s)
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

for (let i of s) {
  console.log(i)
}
