// time 0(n2) space 0(1)

function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
	let j = i;
		// while our current index j is greater than 0 meaning while we haven't reached the beginning
		// of the tentitively sorted array AND while our current number is out of position (while our
		// current number is still less than the number located right before it) swap it with the
		// one before it using our swap helped function.
		while (j > 0 && array[j] < array[j - 1]) {
			swap(j, j - 1, array);
			j--;
		}
	}
	return array;
}

// helper function that swaps 2 numbers at the two given indicies
function swap(i, j, array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}

let arr = [3, 2, 0, 4, 1]
