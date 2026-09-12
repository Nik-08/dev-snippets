function topWords({words, query, limit}: {words: string[], query: string, limit: number}) {
  const resultArr: string[] = [];
	let curr = 0;

	while (curr < words.length || resultArr.length === limit) {
		if(words[curr].toLowerCase().startsWith(query.toLowerCase())) {
			resultArr.push(words[curr])
		}
		curr++;
	}
	return resultArr
}

const words = [
  "a",
  "able",
  "about",
  "absolute",
  "accept",
  "account",
  "achieve",
  "across",
  "act",
  "active",
  "actual",
  "add",
  "address",
  "Admit",
  "Advertise",
  "Affect",
  "AFFORD",
  "after",
  "afternoon",
  "again",
  "against",
  "age",
  "agent",
  "ago",
  "agree",
];

console.log(topWords({words, query: "Af", limit: 3})); // ['Affect', 'AFFORD', 'after']
console.log(topWords({words, query: "aga", limit: 5})); // ['again', 'against']
