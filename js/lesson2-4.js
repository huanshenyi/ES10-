// ディフォルトパラメータ
function f (x, y, z=x + y) {
   console.log(f.length)
   return x * 10 + z // 10 + 8
}
console.log(f(1, undefined, 1))

