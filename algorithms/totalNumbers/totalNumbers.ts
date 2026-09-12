function totalNumbers(digits: number[]): number {
    let hashMap = new Set();

    for(let i = 0; i < digits.length; i++) {
        if(digits[i] === 0) {
            continue;
        };

        let cursor = 0;

        while(cursor < digits.length) {
            let fastCursor = 0;
            if(cursor === i) {
                cursor++;
            } else {
                while (fastCursor < digits.length) {
                    if(fastCursor === i || fastCursor === cursor) {
                        fastCursor++;
                    } else {
                        if(digits[fastCursor] % 2 === 0) {
                            let answer = digits[i] * 100 + digits[cursor] * 10 + digits[fastCursor];
                            if(!hashMap.has(answer)) hashMap.add(answer)
                        }
                        fastCursor++;
                    }
                }
                cursor++;
            };
        }
    }
    return hashMap.size;
};