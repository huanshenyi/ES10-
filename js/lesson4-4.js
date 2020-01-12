const data = {
  PortLang: '78/50',
  Dublin: '88/52',
  Lima: '58/40'
}
Object.defineProperty(data, 'Lima', {
  enumerable: false
})

console.log(Object.keys(data)) // ["PortLang", "Dublin"]
console.log(Object.getOwnPropertyDescriptors(data))

