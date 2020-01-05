const isNonEmptyString = str => {
  if (!str) return false
  return typeof str.valueOf() === "string" && !!str.trim().length
}
export default isNonEmptyString
