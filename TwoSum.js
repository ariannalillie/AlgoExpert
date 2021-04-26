// O(n^2) time | O(1) space

function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        let num1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let num2 = array[j];
            if ((num1 + num2) === targetSum) {
                return [num1, num2]
            }
        }
    }
    return [];
}

console.log(twoNumberSum([2, 3, 5, 7, 9], 8))

// O(nlogn) time | O(1) space

function twoNumberSum2(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length-1;
    while(left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }
    return [];
}

console.log(twoNumberSum2([2, 3, 5, 7, 9], 8))
