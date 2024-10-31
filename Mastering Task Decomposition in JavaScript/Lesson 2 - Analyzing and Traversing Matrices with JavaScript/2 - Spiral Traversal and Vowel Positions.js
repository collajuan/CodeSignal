function spiralTraverseAndVowels(grid) {
    // TODO: Your solution
    let topRow = 0, btnRow = grid.length-1, leftCol = 0, rightCol = grid[0].length-1
    let direction = 1
    let row=0, col=0
    let letters = []
    for(let indx=0; indx<grid.length*grid[0].length; indx++){
        letters.push(grid[row][col])
        if (direction === 1) {
            if(col < rightCol) {
                col += 1
            } else {
                row += 1
                direction = 2
                topRow += 1
            }
        } else if (direction === 2) {
            if(row < btnRow) {
                row +=1
            } else {
                direction = 3
                col -= 1
                rightCol -=1
            }
        } else if (direction === 3) {
            if(col > leftCol) {
                col -= 1
            } else {
                direction = 4
                row -= 1
                btnRow -= 1
            }
        } else if (direction === 4) {
            if(row > topRow) {
                row -=1
            } else {
                direction = 1
                col +=1
                leftCol += 1
            }
        }
    }
    let vowels = []
    letters.forEach((letter, index) =>       
        ['a','e','i','o','u'].includes(letter) && vowels.push(index+1)
    )    
    return vowels;
}

// Example function call
const grid = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l']
];
console.log(spiralTraverseAndVowels(grid)); // Expected Output: [1, 9, 10]