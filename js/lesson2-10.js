// console.log(Reflect.apply(Math.floor, null, [3.72]))
// Math.ceil
let price = 101.2
// if(price >100){
//    price = Math.floor.apply(null,[price])
// } else {
//   price = Math.ceil.apply(null, [price])
// }
// console.log(price)
// console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price]))
// let d = new Date()
// console.log(d)
// let d = Reflect.construct(Date, [])
// console.log(d.getTime(), d instanceof Date)

// const student = {}
// const o = Object.defineProperty(student, 'name', {value: 'Mike'}) //{name: "Mike"}
// const r = Reflect.defineProperty(student, 'name', {value: 'Mike'})
// console.log(student)
// console.log(o)
// console.log(r)

// const obj = { x: 1, y: 2 }
// Reflect.deleteProperty(obj, 'x')
// // console.log(obj)
// console.log(Reflect.get(obj, 'x'))
// console.log(Reflect.getOwnPropertyDescriptor(obj, 'x'))
// let d = new Date()
// console.log(Reflect.getPrototypeOf(d)) // プロトタイプを見る
// console.log(Reflect.has(obj, 'x'))
// const obj = [1,2]
// // Object.freeze(obj)
// // console.log(Reflect.isExtensible(obj))
// console.log(Reflect.ownKeys(obj))
// const obj = { x: 1, y: 2 }
// Reflect.preventExtensions(obj)
// console.log(Reflect.isExtensible(obj))
// Reflect.set(obj, 'z', 3)
// console.log(obj)

const obj2 = [1,2,3]
// console.log(Reflect.getPrototypeOf(obj2))
Reflect.setPrototypeOf(obj2, String.prototype)
console.log(Reflect.getPrototypeOf(obj2))
