function countOccurrences(str, char) {
  let count = 0;
  for (let el of str) {
    if (el === char) count++;
  }
  return count;
}

module.exports = countOccurrences;
