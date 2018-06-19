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

### Maps

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

## Recursion

### Simple For Loop

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
}

var tommy = new Tamagotchi({
  name: "Tommy",
  age: 1
});

ageTamagotchi(tommy);

function ageTamagotchi(tamagotchi) {
  setInterval(function() {
    tamagotchiYear(tamagotchi);
  }, 5000);
}

function tamagotchiYear(tamagotchi) {
  setTimeout(function() {
    ageOneYear(tamagotchi);
    console.log(tamagotchi);
  }, 5000);
}

function ageOneYear(tamagotchi) {
  tamagotchi.age++;
}
```

But what if we want to make this loop recursive? Well, it would look something like this.

```javascript
class Tamagotchi {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  growOlder(maxAge) {
    let tamagotchi = this;
    setTimeout(function() {
      if (tamagotchi.age < maxAge) {
        tamagotchi.ageOneYear();
        return tamagotchi.growOlder(maxAge);
      }
      return this;
    }, 5000);
  }

  ageOneYear() {
    this.age++;
    console.log(this);
  }
}

var tommy = new Tamagotchi({
  name: "Tommy",
  age: 1
});

tommy.growOlder(100);
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

# thing

MADISON SIMPLE
addOne (one parameter) as we would normally do — not pure
Add one pure function
MADISON LOOPS
MAPS: ARRAY
MADISON — ARRAY: Loop as we would normally do (for loop)
MADISON — Rewrite for loop as a map
FUNCTOR — A map that’s loopable. Something you can call map on.
EMILY RECURISON: NUMBERS
EMILY — NUMBERS: Loop
EMILY — Recursive loop that accomplishes the same thing
HIGHER ORDER FUNCTION
