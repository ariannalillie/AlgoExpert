function findThreeLargestNumbers(array) {
    return array.sort((a,b) => (b-a)).splice(0, 3).sort((a,b) => (a - b));

  }
