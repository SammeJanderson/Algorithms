/*given a target word and a array containing wordBank,
return a integer counting all possible ways that the target word can be formed with the wordBank
you can reuse how many fragments you need
* */

const countConstruct = (targetWord: string, wordBank: string[], memo = {}): number => {
    //@ts-ignore
    if (targetWord in memo) return memo[targetWord];
    if (targetWord === "") return 1;
    let total: number = 0;
    for (let word of wordBank) {
        //if the index of the word is 0 that means that it is a suffix of the target word;
        if (targetWord.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(targetWord.slice(word.length), wordBank, memo);
            total += numWaysForRest;
        }
    }
    //@ts-ignore
    memo[targetWord] = total;
    return total;

}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(countConstruct('hello', ['he', 'l', 'o']))
console.log(countConstruct('parallelled', ['ab', 'aba', 'cre', 'ef', 'abcd']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'eeeee',
    'eeeeeee',
    'eeeeeeeee',
    'eeeeeeeeeeee',
    'eeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeee'
]))
