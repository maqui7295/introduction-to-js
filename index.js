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
log(3 % 2) // modulo operator (remainder division)
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

// strings

//  creation

log("PERFORMING STRING CREATION")

let firstName = "John"
let lastName = 'Doe'
let sentences = `This is the first line
This is the second line
This is the third line
`

let nickName = "Dwane 'The Rock' Johnson"
let anotherNickName = 'Steve "Stone Cold" Austin'

log(nickName)
log(anotherNickName)

nickName = "Dwane \"The Rock\" Johnson"
anotherNickName = 'Steve \'Stone Cold\' Austin'

log(nickName)
log(anotherNickName)

log("This is a line!!!!!\nThis is the second line!!!!")
log("Name\tAge\tHeight\nJohn Doe\t14\t1.73m")
log("C:\\Users\\medos\\OneDrive\\Desktop\\mark\\career\\classes\\Lucky\\files")

log(firstName)
log(lastName)
log(sentences)

log("PERFORMING STRING OPERATIONS")

// operations
let fullName = firstName + " " + lastName;
fullName = `${firstName} ${lastName}` // string interpolation

age = 45;

let description = `His name is "${fullName}" and he is ${age} years old.
2 + 2 = ${2 + 2}
`;

log(description)

let mystring = "     Hello World!        "

// mystring = mystring.trim()
// let mystring2 = mystring.trim()

log(mystring)
log(mystring.trim())
log(mystring.trimStart())
log(mystring.trimEnd())

const repeated = mystring.trim().repeat(5)
log(repeated)

log(repeated.replace("World", "Planet"))
log(repeated.replace(/World/g, "Planet"))
log(repeated.replaceAll("World", "Planet"))

let greeting = "Hello World";

log(greeting.length)

log(greeting.charAt(10))
log(greeting.charCodeAt(1))
log(greeting.codePointAt(1))

log(greeting.slice(0, 4))
log(greeting.slice(3))
log(greeting.substring(0, 4))

log(sentences.split('\n'))
log(sentences.split(' '))
log(fullName.split(' '))

// for loop...more in control flow
for (let index = 0; index < greeting.length; index++) {
    const char = greeting[index];
    log(char)
}


// type conversions
let age_str = age.toString()
log(age_str, typeof age_str)
log(typeof String(45))

// You've seen these
log(Number.parseInt("123"), Number.parseFloat("133.45"), Number.parseFloat("aaa"))

let n = Number.parseFloat("aaa")

log(Number.isNaN(n))

// log(!!"")
// log(!"")
// log(!1)
// log(!!age)
// log(!![1, 3])
// log(!![])
// log(!![].length)

// log(mystring.length === 0)
// log(mystring === "")

// truthy - true, 1, [], {}
// falsy - false, 0, "", 

// statement, expressions, variables

// let statement -> let variableName = expression;
let something = 2 + 2; 
let z = 2 + 3;

// function declaration/statement
// function name(params) {
    
// }

// function call expression
log(age);

// normal expressions
2 + 2;

// if Statement
// if (condition) {
    
// }

log(animal)


// variables

// naming - no keywords, must start with letter or _underscore, no spaces
// pattern - snake_case, camelCase, PascalCase
// let if = "" fails

var animal = 'Dog';
var animal = "Height"
var animal = 4;

let goodBoy = "Dog"
// let goodBoy = "Dog"
goodBoy = 34;
goodBoy = "";

// fails
// anotherAnimal = 23;
// anotherAnimal = "Tuwio";

const pi = 3.142
const anotherFish = "Tilapia"
// const a;

// multiple declarations/assignments
let _123, a_12, my_name, myName, PascalCase;
var p, q, r;

var p;
var q;
var r;

let wizard = "a", fish = "b";


// Variable scoping (Lexical scoping)
// if, else, for, while 
{
    var anotherAnimal = "Fish"
}

log(anotherAnimal)

let arr = [1, 2, 3, 4, 5]

// index escapes the for loop scope since it was defined with var
for (var index = 0; index < arr.length; index++) {
    const element = arr[index];
    log(element)
}

log(index)


const human = "Tall"
let humanAgain = "Short"

log(human)
log(humanAgain)

{
    const human = "Something else"
    const humanAgain = "Again else"

    log(human)
    log(humanAgain)

    let monkeyKing = "Wu Kong"
}

// log(monkeyKing)

log(human)
log(humanAgain)


// Here, index is scoped to the for loop
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    log(element)
}

// log(index) this fails

function sayHello(name) {
  var color = "red"

  let human = 1
  let humanAgain = 2;
  
  log(color, human, humanAgain);
  console.log(`My name is ${name}`);
}

// continue from here
function sayHelloAgain(name) {
  var color = "red"
 
//   const human = 1;
//   let humanAgain = 2;

//   human = 1 error
  humanAgain = 2;
  
  log(color, human, humanAgain);
  console.log(`My name is ${name}`);

  name = "Mary Doe"

  log(`Name is now ${name}`)

//   fullName = "Theo"
}

// log(color)
sayHello()
sayHello(fullName)

sayHelloAgain(fullName)

log("Logging the original fullname", fullName)

log(human)
log(humanAgain)


// [1, 2, 3, 4, 5]

4 % 3

log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function(num){
    return num % 5 === 0
}))


// Exercise 
const dirtyString = `
yuieiori The jume; 


`

const cleanstring = '' 

log(cleanstring === dirtyString);