let persons = [
     ['sakib', 39, 'USA'],
     ['Tamim', 38, 'CTG'],
     ['Tanzid Tamim', 22, 'Dhaka'],
     ['Taskin', 29, 'Dhaka']
];

let lessage = [];

for (let i = 0; i < persons.length; i++) {
     if (persons[i][1] < 30) {
          lessage.push(persons[i]);
     }
}

console.log(lessage);
