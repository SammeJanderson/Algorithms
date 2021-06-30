/**
 * wtite a function canSum(targetSum,numbers) that takes a target sum  and a array as arguments
 * 
 * the function must return a boolean indicating whether or not it is possible to generate the target sum using the numbers of the array
 * 
 * use the elements as many times as needed
 * 
 * you may assume that all unput are zero or positive. 
 */


const canSum = (targetSum: number, numbers: number[], memo: any = {}): boolean => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = false
    return false;
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 4, 3, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));



