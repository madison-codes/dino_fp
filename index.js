const x = 1;

/**
 * This is not a functional function because we are manipulating a global variable.
 */
function addOne() {
    x = x + 1
}

/**
 * This is a functional implementation of the function above. `X` remains the same and we return a new variable with a new value.
 */
function addOneFunctional(x) {
    const z = x + 1;
    return z;
}

/**
 * Iterate through every value in a collection and add one to it. This manipulates the origional array.
 */
const array = [1, 2, 3, 4, 5];

function addOneToCollection(array) {
    for (i = 0; i > array.length; i++) {
        return array[i] + 1;
    }
}

/**
 * Iterate through every value in a collection and add one to it. Map returns a new array and does not change the origional array.
 */
const array = [1, 2, 3, 4, 5];

function addOneToCollection(array) {
    array.map((value) => {
        return value + 1;
    });
}

// [EMILY] Loop through a collection of numbers

// [EMILY] Recursive loop through a collection of numbers