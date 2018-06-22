// PURE FUNCTIONS //

let a = 1;

/* Not functional */

function notPure() {
    a++;
    return a;
}

/* Functional */

function add(x, y) {
    return x + y;
}

// LOOPS //

function addOneToCollection(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 1);
    }
    return newArray;
}

function addOneToCollectionFP(array) {
    return array.map((value) => {
        return value + 1;
    });
}

// FUNCTOR //

function multByTwo(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}

// RECURSION //

const count = (num) => {
    result = 0;
    for (let i = 1; i <= num; ++i) result += 1;
    return (result);
};

function recursionCount(max, num = 0) {
    if (num < max) {
        return recursionCount(max, ++num);
    }
    return num;
}

/* Tamagachi example */

// HIGHER ORDER FUNCTIONS //

/* Functional */

function greaterThan(n) {
    return (m) => m > n;
}

const greaterThan10 = greaterThan(10);