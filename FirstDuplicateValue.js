// steps:
// create a new set to push values into
// iterate through the array
    // if set already has value return value as we have found the first duplicate
    // if not add value to the set
//if we have iterated through the entire array and have no found a duplicate return -1

function firstDuplicateValue(array) {
    const noDuplicateSet = new Set
    for (let i = 0; i < array.length; i++) {
        if (noDuplicateSet.has(array[i])) {
            return array[i];
        }
        noDuplicateSet.add(array[i]);
    }
    return -1;
  }


  console.log(firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]))
