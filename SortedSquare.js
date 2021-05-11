function sortedSquaredArray(array) {
    let newArr = [];
    array.forEach(num => {
        currNum = (num * num);
        newArr.push(currNum);

    })
    newArr.sort((a,b) => a - b);
	return newArr;
}

console.log(sortedSquaredArray([1,3,4,6,8]))
