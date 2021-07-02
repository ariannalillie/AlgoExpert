import { swap } from './Swap.js';

// time 0(n2) *nested loops*/ space 0(1)

function selectionSort(array) {
	// current index is equal to the first num in the unsorted list
  let currIdx = 0
	// once this condition is met there will only be one thing left in the list
	// and that will already be sorted
	while (currIdx < array.length - 1) {
		// initalize smallest index to be current index, which is the first number
		// in the unsorted array
		let smallestIdx = currIdx;
		for (let i = currIdx + 1; i < array.length; i++) {
			// iterating through the unsorted sublist to find the smallest index
			if (array[smallestIdx] > array[i]) smallestIdx = i;
		}
		swap(currIdx, smallestIdx, array);
		currIdx++;
	}
	return array;
};


// function swap (i, j, array) {
// 	const temp = array[j];
// 	array[j] = array[i];
// 	array[i] = temp;
// };

let array = [8, 5, 2, 9, 5, 6, 3]
console.log(selectionSort(array))
