/**In this problem we have a 2d grid of arbritary number of rows and columns 
 * the top left cell of the grid is the start point, the bottom right cell is the finish point
 * you can only move down or right 
 * given the constrains create a function that calculate how many ways can travel the grid from the starting point to the end point?
 */

const gridTraveler = (m: number, n: number, memo: any = {}) => {
    const key = m + ',' + n;

    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n,memo) + gridTraveler(m, n - 1,memo);

    return memo[key];
}

console.log(gridTraveler(1,1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))