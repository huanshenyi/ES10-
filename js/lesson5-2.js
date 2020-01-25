const Gen = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 500) {
        reject(time)
      } else {
        resolve(time)
      }
    }, time)
  })
}

Gen(Math.random() * 1000).then((val) => {
  console.log(val)
}).catch((err) => {
  console.log(err)
}).finally(() => {
  console.log('finish')
})
