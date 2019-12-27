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
// iterableをループ用
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
# 要素を探す
```javascript
// filterの返り値のlengthで見つかったかどうかを判断する
let array = [1, 2, 3, 4, 5]
let find = array.filter((item) => {
  return item % 2 === 0
})
console.log(find) //[2,4]
```

```javascript
//　最初マッチングした値を返す
let find = array.find((item) => {
   return item === 6
})
console.log(find) // undefined 
```

```javascript
// indexを返す 見つからない場合 -1を返す
let find = array.findIndex((item) => {
   return item === 1
})
console.log(find)
```
# 継承ES5
```javascript
let Animal = function (type) {
  this.type = type
}
Animal.prototype.eat = function () {
  Animal.walk()
  console.log('i am eat food hello')
}

Animal.walk = function () {
  console.log('i am walking')
}

let Dog = function () {
  Animal.call(this, 'dog')
  this.run = function () {
    console.log('i can run')
  }
}
Dog.prototype = Animal.prototype
let dog = new Dog('dog')
dog.eat()
```
# 関数のパラメータ扱い

## すべてのパラメータを見る
```javascript
// ディフォルトパラメータ
// Array.from(arguments) 
function f (x, y=7, z=x + y) {
   console.log(Array.from(arguments))
   return x * 10 + z // 10 + 8
}
console.log(f(1, undefined, 1))
```
## ディフォルト値がないのパラメータ
```javascript
function f (x, y, z=x + y) {
   console.log(f.length)
   return x * 10 + z // 10 + 8
}
console.log(f(1, undefined, 1))
```
## 不特定多数のパラメータの処理
```javascript
function sum() {
   let num = 0
   Array.from(arguments).forEach(item => {
      num += item * 1
   })
   return num
}
console.log(sum(1,2,3)) //6
```
