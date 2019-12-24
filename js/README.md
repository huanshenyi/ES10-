# ループ
```javascript
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    continue
  }
  // console.log(arr[i])
}
```

```angular2
arr.forEach((item) => {
  // console.log(item)
})
```

```javascript
// ディフォルトはfalseを返す、その場合ループは止まる
// forEachよりコントロールしやすい
arr.every((item) => {
  if (item === 3){
     return false
  }
  console.log(item)
  return true
})
```

```angular2
// for in 基本オブジェクトをループ用
// index は文字列string
for (let index in arr) {
   if (index == 2) {
    continue
  }
  console.log(index, arr[index])
}
```

```javascript
// for of

for (let item of arr) {
  console.log(item)
}
```

```javascript
//arrayの初期化 from
let array = Array.from({ length: 5 }, () => {  return 1 })
```

```javascript
//arrayの初期化from
// Array.file(value, start, end)
let array = Array(5).fill(1)
let array = [1, 2, 3, 4, 5]
console.log(array.fill(8, 2, 4)) //  [1, 2, 8, 8, 5]
```
