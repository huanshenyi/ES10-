const input = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

const output = {
  ...input,
  c: 3
}

console.log(output)
input.a = 4
console.log(output)
const { a, b, ...rest } = input
console.log(rest)
