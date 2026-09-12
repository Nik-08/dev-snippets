const isParenthesisCorrect = (str: string) : boolean => {
  const openBrackets: string = '{([';
  const closeBrackets: string = '})]';
  const closeBracketsMap: Record<string, string> = {
    ']':'[',
    '}':'{',
    ')':'(',
  }
  const stash: string[] = [];


  for(let s of str) {
    if(openBrackets.includes(s)) {
      stash.push(s);
      continue;
    }


    if(closeBrackets.includes(s) && stash.at(-1) === closeBracketsMap[s]) {
      stash.splice(-1, 1);
      continue;
    }


    if(closeBrackets.includes(s) && stash.at(-1) !== closeBracketsMap[s]) {
     return false
    }
  }
  return true
}