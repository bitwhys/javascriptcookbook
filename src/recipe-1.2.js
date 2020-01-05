/**
 * Extract a comma separated list which begins after a colon (:)
 * and ends with a period (.)  within a given string
 *
 * @param str The string containing a list
 * @return Array<string>
 */
const extractList = str => {
  //  1. find the location (i.e., index) of the starting delimiter (:)
  const start = str.indexOf(":")
  //  2. find the location (i.e., index) of the ending delimiter (.), relative to the start
  const end = str.indexOf(".", start + 1)
  //  3. slice into the string with these values
  //  4. split the resulting string by commas, remove whitespace, return this array
  return str
    .slice(start + 1, end)
    .split(",")
    .map(item => item.trim())
}

export default extractList
