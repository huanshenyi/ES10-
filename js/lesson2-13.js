let authors = {
  allAuthors: {
    fiction: ['Agla', 'dadw', 'LP'],
    scienceFiction: ['Neal', 'arthru', 'Ribert'],
    fantasy: ['J.R.Tole', 'J.M.R', 'TerrP.K']
  },
  Addres: []
}

// let r = []
//
// for(let[k, v] of Object.entries(authors.allAuthors)){
//   r = r.concat(v)
// }
// console.log(r)
let r = []
for(let v of authors){
  r.push(v)
}
