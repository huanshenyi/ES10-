// for

const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    continue
  }
  // console.log(arr[i])
}
// forEach
arr.forEach((item) => {
  // console.log(item)
})
// every
arr.every((item) => {
  if (item === 3) {
  } else {
    // console.log(item)
  }
  return true
})
// for in
// arr.a = 8
for (let index in arr) {
  if (index * 1 === 2) {
    continue
  }
  // console.log(index, arr[index])
}
// for of
for (let item of arr) {
  // console.log(item)
}
const Price = {
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  C: [0.5, 0.8, 1.2]
}
for (let item in Price) {
  console.log(item, Price[item])
}
