let o = {
  name: "xiaoming",
  price: 190,
}

// let d = new Proxy(o, {
//    get (target, key) {
//      return target[key]
//    },
//   set (target, key, value) {
//    return false
//   }
// })
// console.log(d.price, d.name)

for(let [key, value] of Object.entries(o)){
  Object.defineProperty(o, key, {
    writable: false
  })
}
console.log(Reflect.isExtensible(o))
