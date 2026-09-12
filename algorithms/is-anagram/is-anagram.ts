
const isAnagram = ({strArr}: {strArr: string[]}): string[][] => {
	const hashMap = new Map<string, string[]>();
	for(let str of strArr) {
		const freqmap = new Array(26).fill(0);
		for(let char of str) {
			freqmap[char.charCodeAt(0) - 97]++;
		}

		const key = freqmap.join('&');
		const group = hashMap.get(key) || [];
		group.push(str);
		hashMap.set(key, group)
	}

  return [...hashMap.values()];
}

export default isAnagram;