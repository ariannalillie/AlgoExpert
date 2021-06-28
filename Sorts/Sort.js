// basic built in array.sort() method

// The default sort order is according to string Unicode code points. So when you call .sort()
// on an array of items, every item is converted into a string and then the Unicode value is
// taken and the items are sorted accordingly, this does not usually give you what you want.
// Therefore, you usually need to pass params in to refine your sort.

// Sort accepts two items (a and b) and determines how we want to sort these elements by their return value.
// If it returns a negative number, a should come before b.
// If it returns a positive number, a should come after b.
// If it returns 0, a and b are the same and should stay in place.

