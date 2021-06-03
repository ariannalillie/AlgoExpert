// The min amount of change that can't be made with the
//array of change

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    console.log(coins)
      let change = 0;
      coins.forEach(coin => {
          console.log(change)
          if (coin > change +1) return change + 1;

          change += coin;
      })
      return change + 1;
  }


let test1 = [5, 7, 1, 1, 2, 3, 22]
console.log(nonConstructibleChange(test1))
