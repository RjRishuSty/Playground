// TODO: Event Bubbling ............... child to parents.....................
// const div = document.getElementById('mainDiv');
// const button = document.querySelector('button');

// div.addEventListener("click", ()=>{
//     console.log("DIV Event");
// });

// button.addEventListener("click", ()=>{
//     console.log('Button Event');
// });


// TODO: Event Capturing............... Parent to child .......................

// const div = document.getElementById('mainDiv');
// const button = document.querySelector('button');

// div.addEventListener("click", ()=>{
//     console.log("DIV Event");
// },true);

// button.addEventListener("click", ()=>{
//     console.log('Button Event');
// });


// TODO: stopPropagation..........................

// const div = document.getElementById('mainDiv');
// const button = document.querySelector('button');

// div.addEventListener("click", (Event)=>{
//     console.log("DIV Event");
// });

// button.addEventListener("click", (Event)=>{
//     console.log('Button Event');
//     event.stopPropagation();
// });


// TODO: stopImmediatePropagation........................

const div = document.getElementById('mainDiv');
const button = document.querySelector('button');

div.addEventListener("click", ()=>{
    console.log("DIV Event");
});

button.addEventListener("click", ()=>{
    console.log('Button Event');
});

button.addEventListener("click",(event)=>{
    console.log("Button2");
    event.stopImmediatePropagation();
})
button.addEventListener("click",(event)=>{
    console.log("Button3");
})

