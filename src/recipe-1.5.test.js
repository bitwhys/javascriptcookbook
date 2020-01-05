import replacePattern from "./recipe-1.5"

describe("Recipe 1.5 Replace all instances of substring-1 with substring-2", () => {
  it("should replace /e$/ with place", () => {
    const input = "Now is the time, this is the tame"
    const pattern = /t\w{2}e/g
    const newValue = "place"
    const expected = "Now is the place, this is the place"
    const actual = replacePattern(input, pattern, newValue)
    expect(actual).toBe(expected)
  })
})
