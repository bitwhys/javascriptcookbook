import isNonEmptyString from "./recipe-1.3"

describe("Recipe 1.3", () => {
  it("should return true for string literal", () => {
    const input = "this is a string literal"
    const actual = isNonEmptyString(input)
    expect(actual).toBe(true)
  })
  it("should return true for string object instance", () => {
    const input = new String("this is a string object instance")
    const actual = isNonEmptyString(input)
    expect(actual).toBe(true)
  })
  it("should return false for undefined", () => {
    const input = undefined
    const actual = isNonEmptyString(input)
    expect(actual).toBe(false)
  })
  it("should return false for null", () => {
    const input = null
    const actual = isNonEmptyString(input)
    expect(actual).toBe(false)
  })
  it("should return false for number", () => {
    const input = 10
    const actual = isNonEmptyString(input)
    expect(actual).toBe(false)
  })
  it("should return false for object", () => {
    const input = { key: "value" }
    const actual = isNonEmptyString(input)
    expect(actual).toBe(false)
  })
  it("should return false for array", () => {
    const input = []
    const actual = isNonEmptyString(input)
    expect(actual).toBe(false)
  })
})
