import { fn, name, obj } from './a'
import objc from './c'

fn()
console.log(name)
console.log(obj)
console.log(objc)

const sum = (a, b) => {
  return a + b
}
const num = sum(10, 20)
console.log(num)
