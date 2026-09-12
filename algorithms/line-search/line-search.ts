import type { lineSearchProps } from './types'

const lineSearch = <T>({array, target}: lineSearchProps<T>): number => {
	if (array.length === 0) {
    return -1
  }

	for(let i = 0; i < array.length - 1; i++) {
		if(array[i] === target) {
			return i
		}
	}
	
	return -1
}

export default lineSearch