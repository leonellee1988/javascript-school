//Assign an item list to a HTML element with "forEach"

const myStudents = [
    {name: "Edwin",
    lastName: "Lee",
    age: 33,
    country: "Guatemala"},
    {name: "Bebay",
    lastName: "Hernández",
    age: 30,
    country: "Guatemala"},
    {name: "Fatima",
    lastName: "Hidalgo",
    age: 29,
    country: "Ecuador"},
    {name: "León",
    lastName: "García",
    age: 55,
    country: "Chile"},
    {name: "Shane",
    lastName: "Peréz",
    age: 28,
    country: "United States"},
];

let studentList = document.getElementById("students");
let optionStudents = "";

myStudents.forEach(name=>{
    optionStudents += `<option values=${name['name']}>${name['name']}</option>`;
});

studentList.innerHTML = optionStudents;