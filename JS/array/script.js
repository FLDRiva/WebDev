const people = [
    {name: 'aaa', age: 22, budget: 4000 },
    {name: 'bbb', age: 23, budget: 2343 },
    {name: 'ccc', age: 15, budget: 454646 },
    {name: 'dddd', age: 21, budget: 11213 },
    {name: 'eeee', age: 16, budget: 768678 },
    {name: 'fff', age: 26, budget: 99999 },
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (let person of people) {
//     console.log(person);
// }

//-------------------------------------
// Метод forEach

// people.forEach(person => console.log(person))

// Метод Map - преобразование текущего массива в новый

// const newPeople = people.map(person => {
//     return person.budget
// })
// console.log(newPeople);

// Filter 

// const adults = people.filter(person => person.age >= 18)
// console.log(adults);

// Reduce - получили финальное значение, совершив итерацию по какому то массиву

// let ammount = 0
// for (let i = 0; i < people.length; i++) {
//     ammount += people[i].budget        
// }

// const ammount = people.reduce((total, person) => total + person.budget, 0)

// console.log(ammount);

// Find

// const d = people.find(person => person.name === 'dddd')
// console.log(d);

//FindIndex

// const d1 = people.findIndex(person => person.name === 'dddd')
// console.log(d1);

// -----------------------------------------------------

const newPeople = people
    .filter(person => person.budget > 5000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget

        }
    })
    .reduce((total, person) => total + person.budget, 0)

console.log(newPeople);