

function generateDocument(characters, document) {
  let sortedCharArr = Array.from(characters).sort().join('')
  let sortedDocArr = Array.from(document).sort().join('')
  for (let i = 0; i < sortedDocArr.length; i++) {
    if (sortedCharArr.indexOf(sortedDocArr[i]) === -1) {
      return false;
    }
  }
    return true;
  }


  characters1 = "Bste!hetsi ogEAxpelrt x ";
  document1 = "AlgoExpert is the Best!";

  console.log(generateDocument(characters1, document1))
