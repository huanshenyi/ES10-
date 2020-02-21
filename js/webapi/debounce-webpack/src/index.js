const input1 = document.getElementById('input1')
// let timer = null
// input1.addEventListener('keyup', () => {
//   if (timer) {
//     clearTimeout(timer)
//   }
//   timer = setTimeout(() => {
//     // changeイベントの誘発
//     console.log(input1.value)
//     // timerをリセット
//     timer = null
//   }, 500)
// })

// 500は延長時間
function debounce (fn, delay = 500) {
  // クロージャのtimer
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}

input1.addEventListener('keyup', debounce(() => {
  console.log(input1.value)
}), 600)
