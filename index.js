// Data types and variables

const log = console.log
// ====================== DATA TYPES ==================

// 1. Number - integers and floats
// 2. Boolean - true and false
// 3. Null
// 4. Undefined
// 5. Symbol - check devdocs.
// 6. Strings

log(2)
log(2.3)

log(Number.isInteger(2))
log(Number.isInteger(2.3))

// operations - arithmetic operators
log("Using Arithmetic Operators")
log(2 + 3)
log(2 - 3)
log(3 / 2)
log(2 * 3)
log(3 % 2) // modulo operator
log(10 % 4) // modulo operator

// comparison - comparison operators
log("Using Comparison Operators")
log(3 > 2)
log(30 >= 25)
log(30 < 25)
log(30 <= 25)

// log(2 == 2) avoid ==
// log(2 != 2) avoid ==

log(2 === 2)
log(2 !== 2)


// truth table
// true and true is true
// true and false is false
// false and true is false
// false and false is false

// true or true is true
// true or false is true
// false or true is true
// false or false is false

// logical operators - && and ||
log("Using Logical Operators")

log(true && true)
log(true && false)
log(3 > 2 && 4 > 5)
log(3 > 2 || 4 > 5)
log(false || true)
log(!true)
log(!3 > 2)
log(!true)
// short circuiting
true && log("The left operand is true");
3 > 2 && log("The left operand is true")
false && log("The left operand is false")

// assignment operators
let a = 4;

a = a + 4;
a += 4

a = a * 4;
a *= 4

a = a - 4;
a -= 4

a = a / 4;
a /= 4

a = a % 4;
a %= 4


// More later
// let is_tall = false

// if(is_tall) {
//    log("I am tall")
// } else {
//    console.log("I am short");
// }

// ========= Undefined and NuLL
let age;
let age2 = null;

log(age)
log(age2)

console.log(typeof age);
console.log(typeof age2);

const person = { name: 'John Doe' }

log(typeof person === "object" && person !== null)


// Exercise 1
// Create three variables. Calculate simple interest
// Print 10% of the calculated simple interest


// Operator precedence and Associativity
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
log(2 + 2 * 3);
log((2 + 2) * 3);

log(2 + 3)
log(3 + 2)

a = 4;
let b = 6;
let c = 12;

log(a + b + c)
log(c + b + a)
log(c * b * a)


// unary form
log(-a)
log(+a)
log(+"234")
log(Number.isInteger("123"))
log(Number.isInteger(+"234"))

+"234"
log(Number.parseInt("123.23"))
log(Number.parseFloat("123"))

// a += 1

log(++a)
log(a++)
log(a)

let x = Number.MAX_SAFE_INTEGER + 2
log(x)
// log(x + 1)
// log(x == x + 1)
// log(x == x - 1)

let bigX = BigInt("9007199254740991")
log(bigX + 2n)

let y = 2n

// https://devdocs.io/javascript/global_objects/bigint 