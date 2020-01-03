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

# Setの操作
```javascript
//同じ要素は排除する
let s = new Set()
// 挿入
s.add('hello')
s.add('goodbye')
console.log(s) // {"hello", "goodbye"}
// 削除
s.delete('hello') // {"goodbye"}
s.clear() // {}
// 探す
console.log(s.has('hello')) //true
//中身の数を見る
console.log(s.size) //2
console.log(s.keys()) //SetIterator {"hello", "goodbye"}
console.log(s.values())//SetIterator {"hello", "goodbye"}
console.log(s.entries()) //SetIterator {"hello" => "hello", "goodbye" => "goodbye"} key => valueを取得
// ループ
s.forEach(item => {
  console.log(item) // hello, goodbye
})
for (let i of s) {
  console.log(i)  // hello, goodbye
}
```
# Map操作
```javascript
let map=new Map([[1, 2], [2,3]])
console.log(map) // {1 => 2, 2 => 3}
// 値をセット, 修正も同じ
map.set(1, 2)
console.log(map) // {1 => 2}
// 削除
map.delete(1)
// クリア
map.clear()
//要素の個数
map.size // 2
// 要素を探す、keyを使用
console.log(map.has(1)) //true
// 要素を取得
console.log(map.get(1))
//
console.log(map.keys(), map.values()) //MapIterator {1, 2} MapIterator {2, 4}
// key valueの操作
// valueが先に来るのがvueと同じ
map.forEach((value, key) => {
  console.log("value:" , value, "key:" , key) // value: 2 key: 1
})                                            // value: 4 key: 2
for (let [key, value] of map) {
  console.log(key, value)
}
```

objectのコピー
```javascript
const target = {}
const source = { b: 4, c: 5}
            // 受ける側 // 送信元
Object.assign(target, source)
// 但し、indexのコピーになる、値のコピーではない。また、null,undefinedはエラー出る

// 値のコピー
// Deep Clone 
obj1 = { a: 0 , b: { c: 0}}; 
let obj3 = JSON.parse(JSON.stringify(obj1)); 
obj1.a = 4; 
obj1.b.c = 4; 
console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
```
# 正規表現
```javascript
const a = 'aaa_aa_a'
const r1 = /a+/g // グローバルマッチング /^ $/
const r2 = /a+/y // 連続マッチング

console.log(r1.exec(a)) // aaa
console.log(r2.exec(a)) // aaa

console.log(r1.exec(a)) // aa
console.log(r2.exec(a)) // null
```
# stringテンプレート
```javascript
function Price (strings, type) {
  let s1 = strings[0]
  const retailPrice = 20
  const wholeSalePrice = 16
  let showTxt
  if (type === 'retail') {
    showTxt = '税込:' + retailPrice
  } else {
    showTxt = '税抜き:' + wholeSalePrice
  }
  return `${s1}${showTxt}`
}
let showTxt = Price`今回の${'retail'}`
console.log(showTxt)
```
# 分割代入
```javascript
let options = {
  title: 'menu',
  width: 100,
  height: 200
}
let {title: title2, width: width2, height: height2} = options
console.log(title2, width2, height2) //menu 100 200
// -----------------------------------------------------------------
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ['Cake', 'Donut'],
  extra: true
}
let { size: { width }, items: [,items1] , extra} = options
console.log(width, items1, extra) // 100 "Donut" true
```
# 動的domを作る
````javascript
function loadScript (src) {
   let script = document.createElement('script')
}
````

# ES5の非同期実行
```javascript
function loadScript (src, callback) {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => {
    callback()
  }
  document.head.append(script)
}

function test () {
  console.log('test')
}
loadScript('./1.js', test)
```
# es6の非同期
```javascript
function loadScript (src) {
  // pending, undefined
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(src) // fulfilled, result 
    script.onerror = (err) => reject(err)// rejected, error
    document.head.append(script)
  })
}

loadScript('./1.js')// 1
  .then(() => {
     return loadScript('./4.js') // err 307行目でcatch
  }, (err)=> {
     console.log(err)
  })
  .then(()=>{
     loadScript('./3.js')
  }, (err)=>{
     console.log(err)
  })
// promise.then(onFulfilled, onRejected) onFulfilled=resolve onRejected=reject
// promiseの状態は不可逆
// then() にパラメータない場合、空のpromiseを返す
// 中身をリターンしないとエラーcatchできない

// catchはpromiseがrejectedになったのエラーを捕獲
```
# 複数の非同期データ扱い(返って来るまで待つ)

```javascript
// もしどれか失敗すると、完全失敗する

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

Promise.all([p1, p2, p3]).then((value)=>{
  console.log(value) // [1, 2, 3]
})
```

# race 複数の非同期データ扱い(先に帰ってきたの使用)
```javascript
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1)
    }, 1000)
  })
}
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(2)
    },500)
  })
}

Promise.race([p1(), p2()]).then((value)=>{
  console.log(value)  //2
})
```
# es6 Reflect
オブジェクトに要素を追加
```javascript
const student = {}
const o = Reflect.defineProperty(student, 'name', {value: 'Mike'})
//{name: "Mike"}
```


オブジェクトのとある属性の状態を見る
```javascript
console.log(Reflect.getOwnPropertyDescriptor(obj, 'x'))
// {value: 1, writable: true, enumerable: true, configurable: true}
```

プロトタイプを見る
```javascript
let d = new Date()
console.log(Reflect.getPrototypeOf(d)) 
```
オブジェクトにとある属性存在するか
```javascript
const obj = { x: 1, y: 2 }
Reflect.has(obj, 'x') //true
```
オブジェクト拡張可能かどうか
```javascript
const obj = { x: 1, y: 2 }
Object.freeze(obj) // オブジェクトの拡張性を無くす
console.log(Reflect.isExtensible(obj)) //false
```

オブジェクト自身のkeys(プロトタイプの要らない)
```javascript
const obj = [1,2]
console.log(Reflect.ownKeys(obj)) // ["0", "1", "length"]
```
オブジェクトの拡張禁止
```javascript
const obj = { x: 1, y: 2 }
Reflect.preventExtensions(obj)
```
オブジェクトの属性追加or修正
```javascript
const obj = { x: 1, y: 2 }
Reflect.set(obj, 'z', 3)
console.log(obj) // {x:1, y:2, z:3}
const obj2 = [1,2,3]
Reflect.set(obj2, 1, 'haha') // [1, "haha", 3]
```

プロトタイプの修正
```javascript
const obj2 = [1,2,3]
// console.log(Reflect.getPrototypeOf(obj2))
Reflect.setPrototypeOf(obj2, String.prototype)
console.log(Reflect.getPrototypeOf(obj2))
```
