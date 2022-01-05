// You're given two non empty strings (one big and one small)
// return smallest substring in big string that contains all of the small strings characters
// substring can contain other chars
// chars don't have to be in the same order
// substring must contain all duplicates on small string


// HOW TO SOLVE
// Count all the characters in the small string using a hashtable
// Have a L and R pointer pointing to chars in our big string 

function smallestSubstringContaining(bigString, smallString) {
    // Write your code here.
};

function getCharCounts(string) {
    const charCounts = {};
    for (const char of string) {

    }
}


const bigStringTest = "abcd$ef$axb$c$"
const smallStringTest = "$$abf"

console.log(smallestSubstringContaining(bigStringTest, smallStringTest));
