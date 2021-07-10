//Create a function that takes two or more arrays and returns an array of their symmetric difference.
//The returned array must contain only unique values (no duplicates).



const difference = (arr1: number[], arr2: number[]) => [
    ...arr1.filter(e => !arr2.includes(e)),
    ...arr2.filter(e => !arr1.includes(e))
]


//@ts-ignore
const symetricDiff = (...arrs) => {

return [...new Set(arrs.reduce(difference))]


}
console.log(symetricDiff([1,2,3],[5,6,1]))
