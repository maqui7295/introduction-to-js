const log = console.log;
// Classes
// Blueprints that encapsulates properties and behaviour

// creation
class Human {
    // fields
    name;
    #age;

    #password;

    constructor(name = '', age = 0, password = 'secret1245') {
        // if (!name || !age) {
        //     throw new Error('Human must have a name and age');
        // }
        // this.#checkAge(age);
        // if (name.length < 3) {
        //     throw new Error('name must have at least three letters')
        // }

        if (password.length < 8) {
            throw new Error('password must have at least 8 characters')
        }

        this.name = name;
        this.age = age;
        this.#password = password;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        this.#checkAge(value);
        this.#age = value;
    }

    // methods
    talk() {
        log(`${this.name} can talk`)
    }

    describe = () => {
        log(`My name is ${this.name} and I am ${this.#age} years old`);
    }

    #checkAge(age) {
        if (age < 0 || age > 100) {
            throw new Error("Error: Age must be between 0 and 100!");
        }
    }
}

// operations
// Instantiation: creating instance or object of the class
const jeremy = new Human('Jeremy', 45);
const philip = new Human('Philip', 32, 'secret1245ery');

log(jeremy)
log(philip)

// check if instance is class type
log(jeremy instanceof Human)
log(philip instanceof Human)

// property access
jeremy.talk()
jeremy.describe()

philip.talk()
philip.describe()
// philip.#privateTalk() error. method is private

log(jeremy.age)

// These fails the invariant check
// jeremy.age = 450;
// philip.age = -1;
try {
    philip.age = -1
} catch (error) {
    log(error.message)
}

log(philip.age)

philip.age += 32;

log(philip.age)

jeremy.name = "Jeremy Simons"
philip.name = "Philip Jones"
// philip.#password error. field is private

log(philip)
log(jeremy)


class SuperHuman extends Human {
    #ability;

    constructor(name, age, ability) {
        super(name, age);

        if (!ability) {
            throw new Error('Provide an ability')
        }

        this.#ability = ability;
    }

    talk() {
        super.talk();
        // super.describe();
        log(`super ${this.name} can talk`)
    }

    ability() {
        log(this.#ability)
    }


}


const joe = new SuperHuman('Joe Jackson', 100, 'flying')

log(joe)
joe.describe()
joe.talk();
joe.ability();
log(joe.name)

log(joe instanceof Human)
log(joe instanceof SuperHuman)
log(philip instanceof SuperHuman)
log(jeremy instanceof SuperHuman)


// joe.age = 400;

/**
 * 
 * @param {Human} human 
 */
function describe(human) {
    human.describe();

    if (human instanceof SuperHuman) {
        human.ability();
    }
}

describe(joe);
describe(philip);