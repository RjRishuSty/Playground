// TODO: What is Destructuring.............

// TODO: =>The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// TODO: Array Destructuring.......
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// TODO: Object Destructuring..........
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;

// TODO: Spread Operatot..........
const arr = [2,3,4,5,6];
const obj2 = [...arr] // TODO: The help of spread syntex i can convert array to object {...arr};
console.log(obj2)

// TODO: Over write in object ............
const obj3 = {
    name:"Rishu",
    address:"Bihar",
    gender:"Male",
}
console.log("Orignal",obj3);
console.log("Spread", {...obj3, name:'ABC',address:"Delhi"})  //TODO: overWrite.........

// Pratice of Destructuring............
let data = null;

async function fetchData() {
  try {
    const response = await fetch(`https://dummyjson.com/users`);
    const dataJson = await response.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
}

//  callFunction
setTimeout(async () => {
  data = await fetchData();
  if (data) {
    const { users } = data;
    users.map((item) => {
      const body = document.body;
      const p = document.createElement("p");
      const div = document.createElement("div");
      const h1 = document.createElement("h1");
      h1.innerText = item.firstName;
      body.append(div);
      div.append(h1);
    });
    console.log("ac", users);
  }
});
