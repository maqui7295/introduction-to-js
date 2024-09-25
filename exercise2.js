function isNumber(num) {
    if (typeof num === 'number') {
        return num - num === 0;
    }
    return false;
}


function run(numbers, action, func) {
    try {
        console.log(`The ${action} of ${numbers} is ${func(numbers)}`);
    } catch (error) {
        console.log(error.message);
    }
}


// 1. Creates a function that sums the elements of an array
// If any of the element is not a number throw an error
function sum(arr) {
    if (!arr.every(isNumber)) {
        throw new Error('All elements must be numbers');
    }

    return arr.reduce((prev, curr) => prev + curr, 0);
}


function sum(arr) {
    return arr.reduce((prev, curr) => {

        if (!isNumber(curr)) {
            throw new Error('All elements must be numbers')
        }

        return prev + curr

    }, 0)
}

let numbers = [1, 2, 3, 4, 5];
let numbers2 = [1, 2, "a", 3, 4, "b", 5];

run(numbers, 'sum', sum);
run(numbers2, 'sum', sum);


// 2. Rewrite the above function to take product instead of sum.
function product(arr) {
    return arr.reduce((prev, curr) => {

        if (typeof curr != 'number') {
            throw new Error('All elements must be numbers')
        }

        return prev * curr

    }, 1)
}

run(numbers, 'product', product);
run(numbers2, 'product', product);

// 3. Create a function that returns a list of two elements
// where the first and second items are the sum and product of the elements, respectively.
const sumProd = (arr) => [sum(arr), product(arr)];

run(numbers, 'sum and product', sumProd);
run(numbers2, 'sum and product', sumProd);

// 4. Create a function that returns the difference between 
// the sum of elements and product of elements.
const diffSumProd = (arr) => sum(arr) - product(arr);

run(numbers, 'difference between sum and product', diffSumProd);

// 5. Create a function that takes two arrays and applies a function to the
// combination of the two arrays.
function apply_to_all(arr1, arr2, f) {
    return f(arr1.concat(arr2));
}

try {
    let numbers2 = [6, 7, 8, 9, 10];

    const allSum = apply_to_all(numbers, numbers2, sum);
    const allProd = apply_to_all(numbers, numbers2, product);
    const allDiffSumProd = apply_to_all(numbers, numbers2, diffSumProd);

    console.log(allSum, allProd, allDiffSumProd)
} catch (error) {
    console.log(error)
}


// 6. Create a function that applies a function to any number of arrays
function apply_to_all_2(f, ...arrays) {
    return f(arrays.flat())
}

const nested = [[20, 30, 40], [50, 60, 70]];

try {
    const result = apply_to_all_2(sum, numbers, [6, 7, 8, 9, 10], numbers, ...nested)
    console.log(result)
} catch (error) {
    console.log(error.message);
}