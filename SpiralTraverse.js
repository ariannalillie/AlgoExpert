function spiralTraverse(array) {
    let sorted2DArray = array.sort((a, b) => (a - b));
      let newArray = [];
      for (let i of sorted2DArray) {
    for (let j of i) {
      newArray.push(j) //Should log numbers from 1 to 10
    }
  }
      return newArray
  }
