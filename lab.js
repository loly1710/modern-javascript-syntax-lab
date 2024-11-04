console.log("================EX1===================");
// EX1: Use `.map()` to iterate over the following array:
// Create a new array where each value is multiplied by 2 and log the new array.

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((currentElement) => {
    return currentElement * 2;
});

console.log(nums2);

//===================EX2======================

console.log("================EX2===================");
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

/*const [firstVal, secondVal] = pizzaToppings;
console.log(firstVal);
console.log(secondVal);*/

console.log(pizzaToppings[0]);
console.log(pizzaToppings[1]);


console.log("=================EX3==================");
  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };

  const {make, model} = car;
  console.log(car.make);
  console.log(car.model);

  console.log("================EX4===================");

  // Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings1 = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings1];

console.log(controversialPizzaToppings);
  
console.log("================EX5===================");

// Duplicate the following object and spread its values into a new variable `myCar`.

const car1 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
const myCar = {...car1};

myCar.model = 'q7';

console.log(myCar);

console.log("================EX6===================");
  
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
const propertyName = 'username';
const userProfile = {
    [propertyName]: 'Layla',
    
};

console.log(userProfile);

console.log("================EX7===================");

console.log("================EX8===================");
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
// 1. `cat`
// 2. `white`
// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.
function animalColor(noun = 'cat', adjective = 'white'){
    console.log( `The ${noun} is ${adjective}.`);   
}
animalColor();

console.log("================EX9===================");
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';
pizza === 'tasty' ? console.log('yum') : console.log('yuck');


console.log("================EX10===================");
const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

const userSavedTheme = null;

const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);

console.log("================EX11===================");

const adventurer = {
    name: 'Alice',
  };

 console.log(adventurer.cat?.age); 