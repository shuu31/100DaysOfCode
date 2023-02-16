// Regular for loop (Yeah a simple one)
let food = ["Apple", "Chicken", "Banana", "Beef"];
let type = ["Fruit", "Meat", "Fruit", "Meat"];

let filteredFruit = [];
let filteredMeat = [];

for (let i = 0; i < food.length; i++) {

  if (type[i] == "Fruit") {
    filteredFruit.push(food[i]);
  } else if (type[i] == "Meat") {
    filteredMeat.push(food[i]);
  }
  
}
console.log(filteredFruit);
console.log(filteredMeat);

// For of loop (Used for arrays)
const users = ["Shuu", "Paul", "Aila"];

for (const user of users) {

  if (user == "Shuu") {
    console.log(`What's up ${user}! my man!`)
  } else if (user == "Paul") {
    console.log(`You're still bad at spinning ${user}`)
  } else if (user == "Aila") {
    console.log(`Keep slapping them thighs ${user}!`)
  }
  
}

// For in loop (Used for objects)

const loggedInUser = {
  name: "Shuu",
  age: 17,
  high: true,
};

for (const key in loggedInUser) {
  
  if (loggedInUser[key] == "Shuu") {
      console.log(`Hello, my name is ${loggedInUser[key]}`);
  } else if (loggedInUser[key] == 17) {
    console.log(`I'm ${loggedInUser[key]} years old`)
  } else if (loggedInUser[key] == true) {
    console.log("I'm very high or sleepy!")
  }

}

// While loop 
let count = 1;

while (count <= 10) {
  console.log("Number " + count);
  count += 1;
}