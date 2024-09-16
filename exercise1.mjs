// Problem" Calculate the total price of an order for a demo food shop

// Setup
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const ITEMS = {
    fish: '$200',
    eggs: '$100',
    rice: '$500',
    salad: '$100',
    beef: '$400',
    legumes: '$50',
    wheat: '$200',
    tomatoes: '$200',
    brocolli: '$300',
    onions: '$100',
    beans: '$300',
}

// Your tasks
// 1. Give the food store a name
// 2. Print a welcome message that includes the store name
// 3. Print the menu in a tabular format
// 4. Print a message asking the buyer to place an order. An order is a string separated of 
// of items separated with spaces e.g "fish eggs"
// 5. Take the orders (This has been done for you). It should be empty.
// 6. Calculate the total price.
// 7. If the buyer includes an item that's absent from the menu, print a message and ignore that order e.g. in "fish toothpaste", ignore toothpaste
// 8. Print the order and total price.
// 9. Print a good bye message

// YOUR SOLUTION STARTS HERE


// 1. Give the food store a name
const storeName = "John Doe's Food Store"

// 2. Print a welcome message that includes the store name
console.log(`Welcome to ${storeName}\n`)

// 3. Print the menu in a tabular format
console.log("Here's a list of our store items");
console.log('Name:\tPrice')
Object.keys(ITEMS).forEach(function(name) {
    console.log(`${name}:\t${ITEMS[name]}`);
})

console.log(); // put a new line

// 4. Print a message asking the buyer to place an order. An order is a string separated of 
// of items separated with spaces e.g "fish eggs"
console.log("Place an order to purchase items from our store");

// 5. Take orders
// solution
const rl = readline.createInterface({ input, output });
const order = await rl.question('Enter your order separated with spaces: ');
rl.close();

// console.log(order);

let orders = order.trim().split(' ');

orders = orders.filter(function(ord) {
    return ord !== "";
})

// console.log(orders);


// 6. Calculate the total price.
let totalFee = 0;

const itemNames = Object.keys(ITEMS)
const validOrders = [];

orders.forEach(function(foodItem) {
  // 7. If the buyer includes an item that's absent from the menu, print a message and ignore that order e.g. in "fish toothpaste", ignore toothpaste 
  foodItem = foodItem.toLowerCase();

  if (itemNames.includes(foodItem)) {
    
    // select price
    let price = ITEMS[foodItem];
    
    // convert price from a string to an integer
    price = price.replace("$", "");
    price = Number.parseInt(price);
    
    totalFee += price;

    // store the valid orders
    validOrders.push(foodItem);
    
  } else {
    console.log(`${foodItem} is not part of our items. Skipping...................`);
  }

})

// 8. Print the order and total price.
console.log(`Your fee for ${validOrders.join(' and ')} is $${totalFee}`);

// 9. Print a good bye message
console.log(`Thank you for purchasing at ${storeName}`);

