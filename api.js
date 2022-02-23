let setImage = document.getElementById("myImage");
let displayImage;

fetch("https://jsonplaceholder.typicode.com/photos")
.then(response=> response.json())//Transforms the data into .json file
.then(data=>{
    displayImage = `<img src=${data[0]['thumbnailUrl']}/>`;//Opens and works with the data
    setImage.innerHTML = displayImage;

}).catch(error=> console.log(error))//Shows and error