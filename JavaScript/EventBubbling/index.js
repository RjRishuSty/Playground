
const div = document.getElementById('mainDiv');
const button = document.querySelector('button');

div.addEventListener("click", ()=>{
    console.log("DIV Event");
});

button.addEventListener("click", ()=>{
    console.log('Button Event');
});

