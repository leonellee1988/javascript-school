let myMovies = [
    {id: 0,
    title: 'The Martian'},
    {id: 1,
    title: 'The dark knight'},
    {id: 2,
    title: 'Hidden Figures'},
    {id: 3,
    title: 'Avengers'},
    {id: 4,
    title: 'The Jungles Book'},
];

/*function getData(){
    setTimeout(()=>{
        return myMovies;
    }, 2000);
}

console.log(getData());*/ /*Displays an error: fetch is not defined, because JS returns 
"myMovies" object, but it does not exist until the second number two */

const getMovies =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(myMovies);
        }, 2000);
    });
}

getMovies()
.then(data => console.log(data))
.catch(error => console.log(error))

/* Promise's structure:

function()
.then(data => function)
.catch(error => console.log(error))

*/

let myBooks = [
    {id: 0,
    title: "Chronicles of Narnia"},
    {id: 1,
    title: "The Names of God"},
    {id: 2,
    title: "The Book's Thief"},
    {id: 3,
    title: "Mathematics... Are you there?"},
    {id: 4,
    title: "The Alchemist"},
];

let listBooks = document.getElementById("books");

const getBooks =()=>{
    return new Promise((resolve, reject)=>{
        resolve(myBooks);
    });
}

let displayBooks = "";

getBooks()
.then(data => data.forEach(item=>{
    displayBooks += `<p>${item['title']}</p>`;
    listBooks.innerHTML = displayBooks;
}))
.catch(error => console.log(error));
