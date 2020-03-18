
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix)){
    return [];
  }
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (0 == count) {
      matrix[i].sort(function(a, b){
        return a - b;
      });
    }
    if (1 == count) {
      matrix[i].sort(function(a, b){
        return a - b;
      }).reverse();
    }
    count++;
    if (2 <= count) {
      count = 0;
    }
  }
  return matrix.flat();
}
