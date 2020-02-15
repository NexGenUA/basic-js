module.exports = function countCats(cats) {
  var count = 0;
  for (var i = 0; i < cats.length; i++) {
    for (var j = 0; j < cats[i].length; j++) {
      if (cats[i][j] === '^^') count++
    }
  }
  return count;
};
