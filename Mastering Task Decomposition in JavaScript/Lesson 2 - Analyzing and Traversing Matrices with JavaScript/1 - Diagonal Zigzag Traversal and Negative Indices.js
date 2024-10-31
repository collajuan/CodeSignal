
function solution(matrix) {
    // TODO: Your solution
    const rows = matrix.length
    const cols = matrix[0].length
    let direction = 1
    let row = 0, col = 0
    const result = []
    for(let index=0; index < rows*cols; index++) {
      if(matrix[row][col] < 0) result.push([row+1,col+1])
      if(direction === -1) {
        if(row === rows-1) {
          col += 1
          direction = 1
        } else if(col === 0) {
          row +=1
          direction = 1
        } else {
          col -= 1
          row += 1
        }
      } else { //up-rigth
          if(col === cols-1) {
            row += 1
            direction = -1
          } else if(row === 0) {
            col +=1
            direction = -1
          } else {
            col += 1
            row -= 1
          }
      }
    }
        
    return result;
}

// Example function call
const exampleMatrix = [
  [1, -2, 3, -4],
  [5, -6, 7, 8],
  [-9, 10, -11, 12]
];
console.log(solution(exampleMatrix)); // Output: [[1, 2], [3, 1], [2, 2], [1, 4], [3, 3]]