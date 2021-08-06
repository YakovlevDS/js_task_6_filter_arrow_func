// ? Task:Как создать массив, в котором будут находиться только совершеннолетние пользователи без HOF?

// Solution
const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 17 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 26 },
  { name: 'Mary', age: 34 },
  { name: 'Tim', age: 14},
];

// Solution_1
const adultPerson = persons.filter(person => person.age >= 18);

//Solution_2
// const adultPerson = [];
// for(let i = 0; i < persons.length; i++) {
//   if(persons[i].age >= 18) {
//     adultPerson.push(persons[i]);
//   }
// }

console.log(adultPerson);


// ! Explanation:

// Sol_1. Через фильтр по возрасту и колбек.
// Sol_2. Через перебор массива  объектов  и запись в новый массив тех у кого возраст более или равно 18.


