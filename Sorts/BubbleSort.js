// A sorting algorithm where the largest values bubble up to the top
// Not a very efficient sort
function swap (i, j, array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
};


function bubbleSort(arr) {
    // start looping with a variable called i from the
    // end of the array towards the beginning
    for (let i = arr.length -1; i >= 0; i--) {
        // start an inner loop with a variable called j
        // from beginning until -1
        for (let j = 0; j < arr.length -1; j++) {
            // if arr[j] is greater than arr[j+1] swap them
            if (arr[j] > arr[j+1]) {
                swap(j, j+1, arr);
            }
        }
    }
    return arr
}
