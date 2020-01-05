var math = require("mathjs")

var result = math
  .select(9)
  .add(3)
  .subtract(6)
  .multiply(23)
  .done()

console.log(result) //{ value: 138 }

var exp = "4 + 3  * 10 / 8"
console.log(math.eval(exp)) // 7.75

var m = math.matrix([
  [4, 3, 2],
  [6, 6, 8],
  [7, 4, 5],
])
console.log(m.valueOf())

var z = math.zeros(2, 2)
console.log(z.valueOf())

var b = math.complex("4 - 2i")
b.re = 5
console.log(b.valueOf()) // 5 - 2i
