function reverseWordsInString(string) {
  const wordsArr = string.split(' ');
	const backToString = wordsArr.reverse().join(' ')
	return backToString;
}
