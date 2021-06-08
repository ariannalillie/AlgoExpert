function insertionSort(arr) {

    // Set a pointer diving the array into sorted and unsorted halves
    let pointer = 0;
    let temp;
    // Repeat while the unsorted half is not empty:
    while (temp < arr.length) {
      // Grab the first value from the unsorted half
      temp = arr[0];

      // For each sorted value in the array starting from the divider,
        // Check if the value to the left is smaller than the unsorted value
          // If so, you've reached the insertion point so exit the loop
          // If not shift the value to the right by 1 and continue

      // Insert the unsorted value at the insertion point

      // Increment the dividing pointer and repeat
    }
  }
let arr = [3, 2, 0, 4, 1]
