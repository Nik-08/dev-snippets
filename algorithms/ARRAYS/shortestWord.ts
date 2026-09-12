function shortestWord(str: string): number {
	const strArr = str.split(' ');

	let minWord = Number.POSITIVE_INFINITY;

	for(let word of strArr) {
		minWord = Math.min(minWord, word.length)
	}

	return minWord
}

shortestWord("lorem ipsum dolor sit amet") // 3