/* eslint-disable no-new-wrappers */
const str1 = String("string")
const num1 = Number(1.45)
const bool1 = Boolean(true)

if (str1 === "string") {
  console.log("equal")
}

if (num1 === 1.45) {
  console.log("equal")
}

if (bool1 === true) {
  console.log("equal")
}

const str2 = new String("string")
const num2 = new Number(1.45)
const bool2 = new Boolean(true)

if (str2 === "string") {
  console.log("equal")
} else {
  console.log("not equal")
}

if (num2 === 1.45) {
  console.log("equal")
} else {
  console.log("not equal")
}

if (bool2 === true) {
  console.log("equal")
} else {
  console.log("not equal")
}
