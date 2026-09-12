

const isPalindrome = ({str, ignoreNonAlpha}: {str: string, ignoreNonAlpha?: boolean}): boolean => {
	const processedStr = ignoreNonAlpha 
		? str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
		: str;

	let leftCursor = 0;
	let rightCursor = processedStr.length - 1;

	let halfStrLength = Math.floor(processedStr.length	/ 2);

	for(let i = 0; i <= halfStrLength; i++) {

		if (processedStr[leftCursor] !== processedStr[rightCursor]) {
			return false
		} 

		leftCursor++
		rightCursor--
	}

	return true
}

export default isPalindrome