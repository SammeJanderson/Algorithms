/**
 * write a function `howSum(targetSum, numbers)` that takes in a target sum and a array as arguments
 * 
 * the function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no 
 * combination that adds up to the targetSum return null
 */


const howSum = (targetSum: number, numbers: number[], memo: any = {}): number[] | null => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null;
}


console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 4, 3, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
