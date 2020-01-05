import extractList from "./recipe-1.2"

describe("Recipe 1.2 Extracting a List from a String", () => {
  it("should return an array of strings", () => {
    const input =
      "This is one sentence. This is a sentence with a list of items: cherries, limes, oranges, apples. This was the list of items."
    const expected = ["cherries", "limes", "oranges", "apples"]
    const actual = extractList(input)
    expect(actual).toEqual(expected)
  })
})
