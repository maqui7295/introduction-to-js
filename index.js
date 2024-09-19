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

// console.log(typeof age);
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

    + "234"
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

log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (num) {
    return num % 5 === 0
}))


// Exercise 
const dirtyString = `
yuieiori The jume; 


`
log(dirtyString)
log(dirtyString.trim())

const cleanstring = dirtyString.trim().replace("yuieiori", "").replace("jume;", "").trim()

log(cleanstring)

log(cleanstring === 'The');


// ========================= Arrays ======================== 
// creation
// operations
function add(num1, num2) {
    return 2 + 2;
}

const myFavoriteColors = ["red", "blue", "green", "yellow"]
const myMixedList = [log, 1, "rtyrie", add(2, 2), { name: "John Doe" }, [1, 2, 3]]
const myFavoriteColors2 = "red blue green yellow".split(' ')

log(myFavoriteColors, myFavoriteColors2)
log(myMixedList)

let emptyArray = []

let prospectArray = Array(100)

// Array.from() Look into the usage of the function

// operations
log(myFavoriteColors.length) // check the length

const secondBestColors = ["purple", "magenta"]

// concatenation using concat method
const allColors = myFavoriteColors.concat(secondBestColors)

log(allColors)

// concatenation using the spread operator
const allColors2 = [...myFavoriteColors, ...secondBestColors]

log(allColors2)

// retrieving the elements of an array - indexing and destructuring

// indexing
log(myFavoriteColors[0])
log(allColors[3])
log(allColors.at(-1))
log(allColors.at(0))

// destructuring
let [colorOne, colorTwo] = secondBestColors

log(secondBestColors)

log(`The first color is ${colorOne}\nThe second color is ${colorTwo}`)

let [red, blue, ...theRestColors] = allColors

log(red)
log(theRestColors)

let [[first, _], bb] = [[1, 2], [3, 4]]

log(first)
log(bb)

// Looping through an array
log("Using For loop")
for (let index = 0; index < allColors.length; index++) {
    const color = allColors[index];
    log(`The color "${color}" is at index ${index}!`)
}

log("Using Foreach")
allColors.forEach(function (color, index) {
    log(`The color "${color}" is at index ${index}!`)
})

// using for of loop
for (const color of allColors) {
    log(`The color is "${color}"`)
}


// Array methods 
log(myFavoriteColors2)
myFavoriteColors2.push("black")

log(myFavoriteColors2)

let bl = myFavoriteColors2.pop()

myFavoriteColors2.pop()

log(myFavoriteColors2)
log(bl)

log(myFavoriteColors)

log(myFavoriteColors.shift())

log(myFavoriteColors)

myFavoriteColors.unshift("red")

log(myFavoriteColors)


const lenColors = myFavoriteColors.map(function (color) {
    return color.length
})

log(lenColors)

const myFavoriteNumbers = "1 2 3 4 5 6 7 8 9 10".split(' ').map(function (num) {
    return +num
})

const squaredNumbers = myFavoriteNumbers.map(function (val) {
    return val * val
})

log(myFavoriteNumbers)
log(squaredNumbers)

// filter

log(
    // collect values greater than 16
    squaredNumbers.filter(function (value) {
        return value > 16
    }),

    "\n",

    // Collect only multiples of 5
    squaredNumbers.filter(function (value) {
        return value % 5 === 0
    }),

)

// prospectArray created above
log(prospectArray)

prospectArray[0] = 23
prospectArray[1] = 23
prospectArray[99] = 200

log(prospectArray)

prospectArray.fill(1)

log(prospectArray)


let userNames = ["John Doe", "Peter Griffin", "John Lock", "Mary Doe", "john Gerald"]

const toRemove = "John"

let remainingUsers = userNames.filter((name) => {
    return !name.toLowerCase().includes(toRemove.toLowerCase())
})

log(remainingUsers)


// ========================= Objects and Map =================================
// creation 
let emptyObj = {};

// 1. Using object literal {}
let employee = {
    name: 'John Doe',
    age: 45,
    height: 1.86,
    hobbies: ['Swimming', 'Skiing', 'Hockey'],

    describe: function () {
        log(`My name is ${this.name} and I am ${this.age} years old`);
        log(`My hobbies are ${this.hobbies.join(' and ')}`)
    },

    describe2() {
        log(`My name is ${this.name} and I am ${this.age} years old`);
        log(`My hobbies are ${this.hobbies.join(' and ')}`)
    },

    "work-life": "balanced"
}

// Using Object.create method
let employee2 = Object.create(null);

let database = { users: userNames, toRemove, employeeInDb: employee }

log(employee)
log(employee2)
log(database)

// ++++++ operations +++++++

// access 
// 1. [] 2. dot notation

log(employee['name'])
log(employee['age'])
employee['describe']()

// square bracket allows dynamic access
// let key = 'name';
// log(employee[key])

// key = 'age'
// log(employee[key])

log(employee.name)
log(employee.age)
employee.describe()

log('accessing employee through database')
database.employeeInDb.describe()

// modify content
employee['name'] = 'Mary Doe'
employee.age = 65;
employee.hobbies.push('Sky Diving')

employee.occupation = 'Software Developer';
employee['job description'] = 'Builds the best softwares';

log(employee)
log(employee.describe())

// delete
delete employee['work-life'];
delete employee['job description'];

log(employee)

// Objects are mutable 
// Passed by referenced
// When a new variable points to an object, a reference is used (shallow copy)
log(database.employeeInDb)

// fundamental types are immutable. Cannot be changed.
let small = 1;
let smaller = small;

log(small, smaller);

smaller = 3;

log(small, smaller);

let myStr = "Hello"
let myStr2 = myStr;

myStr2 += " World";

log(myStr, myStr2)

// shallow copying / passed by reference
let cc = employee

cc.age = 22;

log(employee)
log(database.employeeInDb)

log(employee.hobbies)

// passed by reference
let hobbiesNew = employee.hobbies;

hobbiesNew.push("Hiking")

log(employee.hobbies)

log(cc)
log(database.employeeInDb)

// Shallowing copying
hobbiesNew = [].concat(employee.hobbies)
hobbiesNew = [...employee.hobbies]

log(employee.hobbies)

hobbiesNew.push("silly something")

log(employee.hobbies)
log(hobbiesNew)

// copy the employee using the spread operator
let newData = { ...employee }

log(newData)
log(employee)

newData.age = 34;
newData.height = 1.234
newData.name = "Peter Griffin"

// remove Hiking
newData.hobbies.pop()

log(newData)
log(employee)

let newPerson = { name: "Johnson", hobbies: ['Playing', 'Singing'] };
let newPersonCopy = structuredClone(newPerson)

newPersonCopy.hobbies.pop()
newPersonCopy.hobbies.pop()

log(newPerson)
log(newPersonCopy)

// Full Copy
newData = JSON.parse(JSON.stringify(employee))

newData.hobbies.pop()
newData.hobbies.pop()
newData.hobbies.pop()

log(employee)
log(newData)

// preventing modification
Object.freeze(employee)
// Object.seal

employee.something = 34;
delete employee.hobbies;

log(employee)


// destructuring 
let { name, age: employeeAge, height, ...restProperties } = employee;

log(name)
log(employeeAge)
log(height)
log(restProperties)

let { hobbies: [swimming, skiing, ...others] } = employee;

log(swimming)
log(skiing)
log(others)

log(database)

let { employeeInDb: { hobbies } } = database

// employeeInDb.describe()

// Methods

log(Object.keys(employee))
log(Object.values(employee))
log(Object.entries(employee))

const ourEntries = [
    ['name', 'Mary Doe'],
    ['age', 22],
    ['height', 1.86],
    ['occupation', 'Software Developer']
]

log(Object.fromEntries(ourEntries))

log(Object.fromEntries([[1, 2], [3, 4], [5, 6]]))

// Check other object methods (5)


// Quick introduction to map and set
// let all myFavoriteColors2.concat(myFavoriteColors)
// const duplicateColors = [...myFavoriteColors, ...allColors, ...myFavoriteColors2]
// log(duplicateColors)

// // set creation
// let emptySet = new Set()
// let uniqueColors = new Set(duplicateColors)

// log(emptySet)

// duplicateColors.forEach(color => {
//     emptySet.add(color)
// })

// log(uniqueColors)
// log(emptySet)

// // Check out the recent set methods

// // Map
// // creation
const emptyMap = new Map();
// log(emptyMap)

// emptyMap.set('name', 'John Doe')
// emptyMap.set('age', 45)

// log(emptyMap)

// log(emptyMap.get('name'))
// log(emptyMap.get('age'))

// emptyMap
// uniqueColors

// ======================================= CONTROL FLOW =================================


// conditional statements
// falsy values: "", 0, false, null, undefined, NaN
// truthy values: everything else
if (3 > 2) {
    log("3 is indeed greater than 2")
}

if (10 < 4) {
    log("10 is less than 4")
} else {
    log("10 is not less than 4")
}


const secretNumber = 142;

if(secretNumber < 42) {
    log(`Secret number ${secretNumber} is less than 42.`)
} else if(secretNumber >= 42 && secretNumber <= 99) {
    log(`Secret number ${secretNumber} is greater than or equal to 42`)
} else if(secretNumber >= 100) {
    log(`Secret number ${secretNumber} is greater than or equal to 100`)
} else {
    log("I probably don't know what you've typed")
}

// condition ? true part : false part

// switch statement
switch (secretNumber) {
    case 10:
        log(`Secret number is 10`);
        break;
    case 20:
        log(`Secret number is 20`);
        break;
    case 30:
        log(`Secret number is 30`);
        break;
    case 142:
        log(`Secret number is 142`);
        break;
    default:
        log("I don't know what that was")
        break;
}

let kid = 1;
let anotherKid = 2;

switch (anotherKid) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        log("I am between 1 - 5 years")
        break;
        case 6:
            log("I am 6 years old")
            break;
    default:
        log("I am above 6 years")
        break;
}


// 
if(0) {
    log("I ran")
}

// check for empty array
// if (arr.length) {
    
// }

// check for empty object
// if (Object.keys(employee).length) {
    
// }

// if(emptyMap.size) {

// }

const emptyObj2 = {};

// This is false
// if (emptyObj2 === {}) {
    
// }


// LOOPING
let counter = 1;

while (counter <= 10) {

    if (counter >= 5 && counter <= 8) {
        // log(`Counter is clslooping at ${counter}`)
        counter += 1;
        continue
    }

    log(`Counter is ${counter}`)

    if (counter == 9) break;

    counter += 1;
}

// Javascript For Loops