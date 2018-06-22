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
    for (let i = 0; i < array.length; i++) {
        return array[i] + 1;
    }
}

function addOneToCollectionFP(array) {
    return array.map((value) => {
        return value + 1;
    });
}

// FUNCTOR //

function multByTwo(array) {
    for (let i = 0; i < array.length; i++) {
        return array[i] * 2;
    }
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