/**implement a fibonacci function and describe the time complexity of the function**/

//time complexity O(n) space comlexity O(n)
const fib = (n: number, memo: number[] = []) => {
	if (n in memo) return memo[n];
	if (n <= 2) return 1;
	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
	return memo[n];
}


console.log(fib(4));
console.log(fib(15));
console.log(fib(7));
console.log(fib(50));
console.log(fib(5000));