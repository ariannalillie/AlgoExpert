function moveElementToEnd(array, toMove) {
    return array.sort((a, b) => {
          if (a == toMove || b != toMove) return 1;
          if (a !== toMove || b == toMove) return -1;
      })
  }


  let testArray = [3, 1, 2, 4, 5];
  let testToMove = 3;

  console.log(moveElementToEnd(testArray, testToMove));
