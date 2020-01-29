let authors = {
  allAuthors: {
    fiction: ['Agla', 'dadw', 'LP'],
    scienceFiction: ['Neal', 'arthru', 'Ribert'],
    fantasy: ['J.R.Tole', 'J.M.R', 'TerrP.K']
  },
  Addres: []
}

// authors[Symbol.iterator] = () => {
//   let allAuthors = authors.allAuthors
//   let keys = Reflect.ownKeys(allAuthors)
//   let values = []
//   return {
//     next () {
//       if (!values.length) {
//         if (keys.length) {
//           values = allAuthors[keys[0]]
//           keys.shift()
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }
//
authors[Symbol.iterator] = function * () {
  let allAuthorss = this.allAuthors
  let keys = Reflect.ownKeys(allAuthorss)
  let values = []
  while(1){
    if(!values.length){
      if(keys.length){
        values = allAuthorss[keys[0]]
        keys.shift()
        yield values.shift()
      }else {
        return false
      }
    }else {
      yield values.shift()
    }
  }
}

let r = []
for (let v of authors) {
  r.push(v)
}
console.log(r)

// let authors = {
//   allAuthors: {
//     fiction: [
//       'Agatha Christie',
//       'J. K. Rowling',
//       'Dr. Seuss'
//     ],
//     scienceFiction: [
//       'Neal Stephenson',
//       'Arthur Clarke',
//       'Isaac Asimov',
//       'Robert Heinlein'
//     ],
//     fantasy: [
//       'J. R. R. Tolkien',
//       'J. K. Rowling',
//       'Terry Pratchett'
//     ]
//   }
// }
// authors[Symbol.iterator] = () => {
//   let newauthors = authors.allAuthors
//   let keys = Reflect.ownKeys(newauthors)
//   let value = []
//   return {
//     next () {
//       if (!value.length) {
//         if (keys.length) {
//           value = newauthors[keys[0]]
//           keys.shift()
//         }
//       }
//       return {
//         done: !keys.length,
//         value: value.shift()
//       }
//     }
//   }
// }

// for (let i of authors) {
//   console.log(i)
// }
