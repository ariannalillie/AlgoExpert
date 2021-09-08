function spiralTraverse(array) {
    let newArray = [];
    for (let i of array) {
        for (let j of i) {
            newArray.push(j)
        }
    }
    let sorted2DArray = newArray.sort((a, b) => (a - b));
    return sorted2DArray
}

let testArray = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
]

console.log(spiralTraverse(testArray));
