  function generateDocument(characters, document) {
    let sortedCharArr = Array.from(characters).sort()
    let sortedDocArr = Array.from(document).sort()
    for (let i = 0; i < sortedDocArr.length; i++) {
      if (sortedCharArr.indexOf(sortedDocArr[i]) === -1) {
         return false;
      } else {
        let valToRemove = sortedCharArr.indexOf(sortedDocArr[i])
        sortedCharArr.splice(valToRemove, 1);
        console.log(sortedCharArr)
      }
    }
      return true;
    }

  let characters1 = "Bste!hetsi ogEAxpelrt x ";
  let document1 = "AlgoExpert is the Best!";

  let characters2 = "aheaolabbhb";
  let document2 = "hello"

  console.log(generateDocument(characters2, document2))
