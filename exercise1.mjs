// Problem" Calculate the total price of an order for a demo food shop

// Setup
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


const menu = {
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

// 5. Take orders
// solution
const order = await rl.question('Enter your order separated with spaces: ');
rl.close();

console.log(order);

// Your solution continues