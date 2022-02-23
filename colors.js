//Assign an item list to a HTML element with "for...of"

const myColors = [
    {spanish: 'rojo',
    english: 'red'},
    {spanish: 'amarillo',
    english: 'yellow'},
    {spanish: 'azul',
    english: 'blue'},
    {spanish: 'naranja',
    english: 'orange'},
    {spanish: 'verde',
    english: 'green'},
];

let colorList = document.getElementById("colors");
let optionColors = "";

for(let item of myColors){
    optionColors += `<option value=${item['english']}>${item['english']}</option>`;
}

colorList.innerHTML = optionColors;