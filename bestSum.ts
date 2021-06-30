/*given the function bestSum(targetSum: number,numbers: number[])
create a implementation that uses the numbers array and return shortest combinations of number that adds up to the target sum
if there are a tie between two results return either one
assume that only nonegatives will be given as arguments.
if the target is not possible with no combination return null
*/


const bestSum = (targetSum: number, numbers: number[], memo: any = {}): number[] | null => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortestCombination: number[] | null = null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);

        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            //if the current combination is shortest than the current shortest then updated it
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

console.log(bestSum(7, [4, 7, 3, 5]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(8, [1, 4, 5]))
console.log(bestSum(100, [1, 2, 5, 25]))
