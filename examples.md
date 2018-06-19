# Functional Programming in JavaScript

We're going to start slow and simple, master building a pure function and then take things from there.

## (SIMPLE) PURE FUNCTIONS

### Add

Create a pure function that finds the sum of two parameters.

```javascript
function add(x, y) {
  return x + y;
}
console.log(add(2, 2)); // prints 4
```

### Multiply

It's your turn! Build a pure function that multiplies two parameters.

<details><summary>Click to view answer.</summary><p>

```javascript
function multiple(x, y) {
  return x * y;
}
console.log(add(3, 3)); // prints 9
```

</p></details>

## LOOPS

### Convert `For` To `Map`

Let's continue to keep it simple and build slowly! Let's take our `add` function and use it on a collection of numbers.

What do you normally use to contain may elements in JavaScript? An array. Let's go ahead and use an array here.

Here is our `for` loop that adds one to every value in our array.

```javascript
function addOneToCollection(array) {
  for (let i = 0; i < array.length; i++) {
    return array[i] + 1;
  }
}
console.log(addOneToCollection([1, 2, 3])); // prints [2, 3, 4]
```

Now let's refactor and rewrite! Go ahead and turn the `addOneToCollection` `for` loop into a function that uses map.

```javascript
function addOneToCollection(array) {
  return array.map((value) => {
      return value + 1;
  }
}
console.log(addOneToCollection([1, 2, 3])); // prints [2, 3, 4]
```

When given a value, the function will unwrap the values that are contained in the array into individual parts, feed those parts into the function that it was given and take the return value and rewrap them in a structured form.

You just wrote a functor!

Congratulations!

### Functors

All a functor is, is an object that has a `.map` method... an array for instance.

Now it's your turn to write a functor! Rewrite the `multByTwo` function as a functor.

Remember all you have to do is convert the `for` loop to use `map`.

```javascript
function multByTwo(array) {
  for (let i = 0; i < array.length; i++) {
    return array[i] * 2;
  }
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

Now, let's make things a bit more complicated. Say you're making a new Tamagotchi and need to increment it's age. Below is one way you might set up the logic.

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

Let's start off with a function. This function again is super simple! We are going to just add one to a value that we pass in.

```javascript
function addOne(value) {
  return value++;
}

console.log(addOne(2)); // 3
```

But what if we pass in an array instead of a single value? To handle this our function has to expand.

```javascript
function addOne(value) {
  if (typeof value === "number") {
    return value++;
  }
  if (typeof value === "array") {
    return value.map(number => {
      return value++;
    });
  }
}

console.log(addOne(2)); // 3
console.log(addOne([1, 2, 3])); // [2, 3, 4]
```

This is fine, but what if I want to add another method. All of the sudden my function becomes bloated and unmanageable.

So, let's refactor.

```javascript
function addOne(value: number): number {
  value++;
}

function addOneToArray(value: number[]): number[] {
  return value.map(number => {
    return addOne(value);
  });
}

function higherOrderFn(value: A, fn: F[A]): A {
  return fn(value);
}

console.log(higherOrderFn(2, addOneToValue)); // 3
console.log(higherOrderFn([2, 3, 4], addOneToArray)); // [3, 4, 5]
```

If you use Typescript this will look farmiliar to you, if not, types are displayed here to display the point that we can better reason about these small, composible functions.

Your turn. Take a shot at refactoring this large bloated function into smaller, composible, and higher order functions.

```javascript
function multByTwo(value) {
  if (typeof value === "number") {
    return value * 2;
  }
  if (typeof value === "array") {
    return value.map(number => {
      return value * 2;
    });
  }
}

console.log(multByTwo(2)); // 3
console.log(multByTwo([1, 2, 3])); // [2, 3, 4]
```

<details><summary>Click to view answer.</summary><p>

```javascript
function multByTwo(value) {
  value++;
}

function multByTwoArray(value) {
  return value.map(number => {
    return addOne(value);
  });
}

function higherOrderFn(value, fn) {
  return fn(value);
}

console.log(higherOrderFn(2, multByTwo)); // 6
console.log(higherOrderFn([2, 3, 4], multByTwoArray)); // [4, 6, 8]
```

</p></details>
