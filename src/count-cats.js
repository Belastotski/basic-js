module.exports = function countCats(arr) {
  return arr.flat().filter(val => val == '^^').length
};
