function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
      let array1 = redShirtSpeeds.sort((a, b) => (a - b));
      let array2 = blueShirtSpeeds.sort((a, b) => (a - b));

      let counter = 0;

      if (fastest) {
          let array3 = array2.reverse();
          for (let i = 0; i < array1.length; i++) {
              let max = Math.max(array1[i], array3[i])
              counter +=max;
          }
      } else {
          for (let i = 0; i < array1.length; i++) {
              let max = Math.max(array1[i], array2[i])
              counter +=max;
          }
      }
      return counter;
  }
