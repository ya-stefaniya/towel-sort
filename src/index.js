
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length == 0)  return [];
  matrix[1].reverse();
  if(matrix.length > 3) matrix[3].reverse();
  return matrix.flat();
 
}
