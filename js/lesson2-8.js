// let arr = ['hello', 'world']
// let [firstName , lastName] = arr
// console.log(firstName, lastName)
// let arr = 'abcd'
// let [firstName, , thirdName] = new Set([1, 2, 3, 4])
// console.log(firstName, thirdName)
// let user = {name: 's', surname: 't'};
// [user.name, user.surname] = [1, 2]
// console.log(user)
// let arr = ['hello', 'world']
// for(let i = 0, item; i < arr.length; i++) {
//   item = arr[i]
// }
// let user = {name: 's', surname: 't'}
// for (let [k, v] of Object.entries(user)) {
//   console.log(k,v)
// }

// let arr = [1,2,3,4,5,6,7,8,9]
// let [firstName, curName, ...last] = arr
// console.log(firstName, curName, last)

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ['Cake', 'Donut'],
  extra: true
}
let { size: { width }, items: [, items1], extra } = options
console.log(width, items1, extra) // 100 "Donut" true
