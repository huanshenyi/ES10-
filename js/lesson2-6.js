const a = 'aaa_aa_a'
const r1 = /a+/g // グローバルマッチング /^ $/
const r2 = /a+/y // 連続マッチング

console.log(r1.exec(a)) // aaa
console.log(r2.exec(a)) // aaa

console.log(r1.exec(a)) // aa
console.log(r2.exec(a)) // null
