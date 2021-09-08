function firstNonRepeatingCharacter(string) {
    const stringArr = [...string];
    const noDuplicates = new Set;
    stringArr.forEach((char, i) => {
        console.log(noDuplicates)
        if (noDuplicates.has(char)) {
            return i;
        }
        noDuplicates.add(char);
    })
return -1
}


console.log(firstNonRepeatingCharacter("faadabcbbebdf"))
