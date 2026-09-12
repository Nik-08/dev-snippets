const isFibonacci = ({numbers, countOfNext = 10}: {numbers: number[], countOfNext?: number}): number[] => {
	const result: number[] = [];

	if(numbers.length < 2) {
		return numbers
	}

	let start: number = numbers[numbers.length - 2];
	let end: number = numbers[numbers.length - 1];

	for(let i = 1; i<= countOfNext; i++) {
		const next = start+end;
		result.push(next)

		start = end;
		end = next
	}

	return result
}

export default isFibonacci