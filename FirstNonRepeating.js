// Non repeating character in a sequence 

function firstNonRepeating(string) {
    const arr = string.split('');
    let first
    let letters = Set();
    arr.forEach(char => {
        if (letters.has(char)) {

        }

    })

    return arr;
}


const testString = "abcdcaf"

console.log(firstNonRepeating(testString));
