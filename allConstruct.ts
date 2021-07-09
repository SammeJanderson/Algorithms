/* create a function that takes a target string and a array of strings
* the function should return a 2d array containing all the ways that the target can be construct by
* concatenating elements from the array. Each element of the 2d array should represent one combination that construct the target array
*
* */
const allConstruct = (target: string, wordBank: string[], memo = {}): string[][] => {
    //@ts-ignore
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(n => [word, ...n])
            result.push(...targetWays);
        }
    }
    //@ts-ignore
    memo[target] = result;
    return result
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'def', 'abcd', 'ef', 'c']));
console.log(allConstruct('skateboard', ['purp', 'p', 'ur', 'le', 'purl']));

console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaa', ['aaaaaa', 'a', 'aaa', 'aaaaa', 'aaaa']));
