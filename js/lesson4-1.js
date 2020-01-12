// async function firstAsync () {
//   return 27
// }
// firstAsync().then(val => {
//   console.log(val)
// })
//
// console.log(firstAsync() instanceof Promise)

async function firstAsync () {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('now it is donw')
    }, 1000)
  })
  let result = await promise
  console.log(result)
  console.log(await Promise.resolve(40))
  console.log(await 4)
  console.log(2)
  return 3
}

firstAsync().then((vel) => {
  console.log(vel)
})
