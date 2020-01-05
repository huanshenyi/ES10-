
// let d = new Proxy(o, {
//    get (target, key) {
//      return target[key]
//    },
//   set (target, key, value) {
//    return false
//   }
// })
// console.log(d.price, d.name)

// for(let [key, value] of Object.entries(o)){
//   Object.defineProperty(o, key, {
//     writable: false
//   })
// }
// console.log(Reflect.isExtensible(o))
// let o = {
//   name: "xiaoming",
//   price: 190,
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key] || ''
//   },
//   set (target, key, value) {
//     if (Reflect.has(target, key)) {
//       if (key === 'price') {
//         if (value > 300) {
//           // throw new TypeError('price exceed 300')
//           return false
//         } else {
//           target[key] = value
//         }
//       } else {
//         target[key] = value
//       }
//     } else {
//       return false
//     }
//   }
// })
// d.price = 301 // 通らない
// d.name = 'hanmeimei' // 通る
// console.log(d.price, d.name)

// window.addEventListener('error', (e) => {
//   console.log(e.message)
// }, true)
//
// let o = {
//   name: "xiaoming",
//   price: 190,
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key] || ''
//   },
//   set (target, key, value) {
//     if (Reflect.has(target, key)) {
//       if (key === 'price') {
//         if (value > 300) {
//           throw new TypeError('price exceed 300')
//           // return false
//         } else {
//           target[key] = value
//         }
//       } else {
//         target[key] = value
//       }
//     } else {
//       return false
//     }
//   }
// })

// class Component {
//   constructor () {
//     this.proxy = new Proxy({
//       id: Math.random().toString(36).slice(-8)
//     }, {})
//   }
//   get id(){
//     return this.proxy.id
//   }
// }
//
// let com = new Component()
// for (let i = 0; i < 10; i++) {
//   console.log(com.id)
// }

let o = {
  name: "xiaoming",
  price: 190,
}

let d = new Proxy(o, {
  get (target, key) {
    if (key === "id") {
      target["id"] = Math.random().toString()
      return target["id"]
    } else {
      return 0
    }
  }
})
console.log(d.id)
