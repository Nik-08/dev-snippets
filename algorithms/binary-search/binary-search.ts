import type { binarySearchProps } from './types'

const binarySearch = <T>({array, target}: binarySearchProps<T>): number => {
	if (array.length === 0) {
    return -1
  }

	let leftCursor = 0;
	let rightCursor = array.length - 1;
	let result = -1;

	while (leftCursor <= rightCursor) {
		const middle = Math.floor((leftCursor + rightCursor) / 2);

		if(array[middle] > target) {
			rightCursor = middle - 1;
			continue;
		}

		if(array[middle] < target) {
			leftCursor = middle + 1;
			continue;
		}

		result = middle;
    break;
	}
	
	return result
}

export default binarySearch