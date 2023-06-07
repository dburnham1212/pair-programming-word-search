const transpose = function (matrix) {
  // Replace this code with your solution
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }

  for (let column = 0; column < matrix.length; column++) {
    for (let row = 0; row < matrix[column].length; row++) {
      newArray[row].push(matrix[column][row]);
    }
  }
  // console.log(newArray);
  return newArray;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

module.exports = transpose;