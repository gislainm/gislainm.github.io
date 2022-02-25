/*eslint-disable */
function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log("expect 45:", getSum(matrix));