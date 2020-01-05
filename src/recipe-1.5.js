/**
 *
 * @param {string} str The string containing the oldSubStr to replace
 * @param {string | RegExp} oldSubStr The substring to be replaced
 * @param {string} newSubStr The new substring to insert in str
 * @return {string} A new string with all instances of oldSubStr replaced  with newSubStr
 */
const replacePattern = (str, oldSubStr, newSubStr) =>
  str.replace(oldSubStr, newSubStr)

export default replacePattern
