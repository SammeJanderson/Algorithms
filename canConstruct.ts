/*given a target word and a array containing wordBank,
return a boolean indicating if it's possible to construct the target word using the wordBank
* */

const canConstruct = (targetWord: string, wordBank: string[], memo = {}): boolean => {
    //@ts-ignore
    if (targetWord in memo) return memo[targetWord];
    if (targetWord === "") return true;
    for (let word of wordBank) {
        if (targetWord.indexOf(word) === 0) {
            const suffix = targetWord.slice(word.length);
            if (canConstruct(suffix, wordBank, memo)) {
                //@ts-ignore
                memo[targetWord] = true
                return true;
            }
        }
    }
    //@ts-ignore
    memo[targetWord] = false;
    return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(canConstruct('hello', ['he', 'l', 'o']))
console.log(canConstruct('parallelled', ['ab', 'aba', 'cre', 'ef', 'abcd']))

console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'eeeee',
    'eeeeeee',
    'eeeeeeeee',
    'eeeeeeeeeeee',
    'eeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeee'
]))