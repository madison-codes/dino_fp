# Functional Programming in JavaScript

---

### Setup

Install [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) with the command `brew install yarn` if you don't already have it installed.

Install dependencies with the command `yarn`.

---

We're going to start slow and simple, master building a pure function and then build up your knowledge from there.

## (SIMPLE) PURE FUNCTIONS

This is not a pure function:

```javascript
let a = 1;

function notPure() {
  a++;
  return a;
}
```

Do you know why?

This function modifies the global variable `a` and returns it. Since `a` is a global variable in the program another piece of our program might rely on it. If that is the case, modifying `a` to something unexpected could cause negative consequences. Changing a global variable is an example of a side effect.

Now let's write a pure function to compare.

### Add

`add` is an example of a pure function. It takes two inputs and returns an entirely new value without introducing side effects into our app.

```javascript
function add(x, y) {
  return x + y;
}
console.log(add(2, 2)); // prints 4
```

### Multiply

It's your turn! Take a shot at writing a pure implementation of the function `multiply`.

To check your work.

1.  Uncomment the `PURE FUNCTIONS` describe block in the `tests/WRITEME.test.js` file.
2.  Run `yarn run test` to run the test suite.

<details><summary>Or click to view answer.</summary><p>

```javascript
function multiply(x, y) {
  return x * y;
}

console.log(multiply(3, 3)); // prints 9
```

</p></details>

## LOOPS

### Convert `For` To `Map`

Let's continue to keep it simple and build slowly! Let's take our `add` function and use it on a collection of numbers. Maybe numbers contained in an array perhaps? Let's go ahead and use an array here.

Here is our `for` loop that adds one to every value in our array.

```javascript
function addOneToCollection(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  return newArray;
}

console.log(addOneToCollection([1, 2, 3])); // prints [2, 3, 4]
```

Now let's refactor! Go ahead and turn the `addOneToCollection` `for` loop into a function that uses map.

```javascript
function addOneToCollection(array) {
  return array.map(value => {
    return value + 1;
  });
}
console.log(addOneToCollection([1, 2, 3])); // prints [2, 3, 4]
```

Congratulations!

You just wrote a functor!

When given a value, the function will unwrap the values that are contained in the array into individual parts, feed those parts into the function that it was given and take the return value and rewrap them in a structured form.

### Functors

A functor is an object that has a `.map` method.

Now it's your turn to write a functor! Rewrite the `multByTwo` function as a functor.

Remember all you have to do is convert the `for` loop to use `map`.

```javascript
function multByTwo(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }
  return newArray;
}

console.log(multByTwo([1, 2, 3])); // prints [2, 4, 6]
```

<details><summary>Click to view answer.</summary><p>

```javascript
function multByTwo(array) {
  return array.map((value) => {
      return value * 2;
  }
}
console.log(multByTwo([1, 2, 3])); // prints [2, 4, 6]
```

</p></details>

### Recursion

#### Simple For Loop

A simple for loop in JavaScript.

```javascript
var count = num => {
  result = 0;
  for (var i = 1; i <= num; ++i) result += 1;
  console.log(result);
};

count(10); // 10
count(50); // 50
count(500); // 500
```

Now, the above is one of the DUMBEST ways possible to count to 10. Or 50. Or 500. But let's go with it. How would you make this example recursive?

```javascript
function recursionCount(max, num = 0) {
  if (num < max) {
    console.log(num);
    return recursionCount(max, ++num);
  }
  return num;
}

recursionCount(10); // 10
recursionCount(50); // 50
recursionCount(500); // 500
```

Now it's your turn! Make a recursive countdown loop in JavaScript.

<details><summary>Click to view answer.</summary><p>

```javascript
function countdown(num) {
  console.log(num);
  if (num >= 1) {
    countdown(num - 1);
  }
}
```

</p></details>

#### Tommy Tamagotchi

Now, let's make things a bit more complicated. Say you're making a new Tamagotchi and need to increment its age. Below is one way you might set up the logic.

```javascript
class Tamagotchi {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  growOlder = maxAge => {
    var tamagotchi = this;
    for (i = tamagotchi.age; i < maxAge; i++) {
      setTimeout(function() {
        tamagotchi.passAroundTheSun();
      }, 5000);
    }
  };

  passAroundTheSun = () => {
    this.age++;
    console.log(this);
  };
}

var tommy = new Tamagotchi({
  name: "Tommy",
  age: 11
});

tommy.growOlder(100);
```

But what if we want to make this loop recursive? Well, it would look something like this.

```javascript
class Tamagotchi {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  growOlder = maxAge => {
    var tamagotchi = this;
    setTimeout(function() {
      // # -------------- #
      // | YOUR CODE HERE |
      // # -------------- #
    }, 100);
  };

  ageOneYear = () => {
    this.age++;
    console.log(this);
  };
}

var tommy = new Tamagotchi({
  name: "Tommy",
  age: 1
});

tommy.growOlder(100);
```

<details><summary>Click to view answer.</summary><p>

```javascript
growOlder = maxAge => {
  var tamagotchi = this;
  setTimeout(function() {
    if (tamagotchi.age < maxAge) {
      tamagotchi.ageOneYear();
      return tamagotchi.growOlder(maxAge);
    }
    return tamagotchi;
  }, 100);
};
```

</p></details>

### HIGHER ORDER FUNCTIONS

Let's start off with a function. This function again is super simple! We want to check if a value is greater than 10, if it is, we will return true.

```javascript
function greaterThan10(n) {
  return m => m > 10;
}

console.log(greaterThan10(2)); // false
```

But what if we want to reuse this function later in our program, say to check if something is greater than 20?

We could write this:

```javascript
function greaterThan20(n) {
  return m => m > 20;
}

console.log(greaterThan20(28)); // true
```

But then we are unnecessarily duplicating code.

So, let's refactor to make our method generic.

```javascript
function greaterThan(n) {
  return m => m > n;
}

const greaterThan10 = greaterThan(10);
const greaterThan20 = greaterThan(20);

console.log(greaterThan10(2)); // false
console.log(greaterThan20(28)); // true
```

Now we wrote our method to be more generic and take another function as a parameter. This is called a higher order function.

A higher order function takes one or more functions as arguments and returns a function as its result.

Your turn. Take a shot at writing the higher order function `lessThan`. And then check your work by creating a `lessThan10` function and a `lessThan20` function.

<details><summary>Click to view answer.</summary><p>

```javascript
function lessThan(n) {
  return m => m < n;
}

const lessThan10 = lessThan(10);
const lessThan20 = lessThan(10);
```

</p></details>

Take a crack at thinking up your own examples! and play around with functors, recursion, and higher-order functions!
