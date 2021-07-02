// Copying arrays

// var originalArr = [true, true, undefined, false, null]

// var copy1 = originalArr.slice(0)
// var copy2 = [...originalArr]

// console.log(originalArr)
// console.log(copy1)
// console.log(copy2)

const people = [
    {name: 'Oleg', age: 25, budget: 40000},
    {name: 'Olehandro', age: 35, budget: 2000},
    {name: 'Oleks', age: 15, budget: 300000},
    {name: 'Olena', age: 26, budget: 21000},
    {name: 'Olen', age: 14, budget: 55000},
    {name: 'OleOle', age: 21, budget: 900},
]

// for (let i = 0; i < people.length ; i++) {
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

// people.forEach(function(person, index, pArr) {
//     console.log(pArr)
//     console.log(person)
//     console.log(index)
// })

// people.forEach( person => console.log(person));
//Method map

// const newPeople = people.map( person => `${person.name} ${person.age}`)

// const newPeople = people.map(person => person.age * 3);

// console.log(newPeople)

// Method Filter
// const adults = []

// for (let i = 0; i < people.length; i++) {
//     if (people[i].budget >= 40000) {
//         adults.push(people[i])
//     }
// }

// console.log(adults)

// const adults = people.filter(/* elem, index, array */ person =>{
//     if (person.age >= 18) {
//         return true
//     }
// })

// const adults = people.filter(person => person.age >= 18)

// console.log(adults)

// Reduce method
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount +=people[i].name + people[i].budget 
// }

// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)


// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if(people[i].budget >= 20000) {
//         adults.push(people[i])
//     }
// }

// console.log(adults)

// find

// const oleg = people.find(person => {
//     return person.name == 'Oleg'
// })

// const oleg = people.find((person) => person.name == "Oleg");
// console.log(oleg)

// FindIndex

// const indexOlena = people.findIndex((person) => person.name == "OleOle")
// console.log(indexOlena)

const newPeople = people.filter(person => person.budget > 3000)
    .map(person => `${person.name}`)
    .reduce((person, total) => person.budget = total)
console.log(newPeople)