// const people [
//     {name: 'Nikitos', age: 15, budget: 4000},
//     {name: 'Misha', age: 20, bodget: 40000},  
// ]

// Copying arrays

var originalArr = [true, true, undefined, false, null]

var copy1 = originalArr.slice(0)
var copy2 = [...originalArr] * 2

console.log(originalArr)
console.log(copy1)
console.log(copy2)
    
