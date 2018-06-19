# Functional Programming in JavaScript

We're going to start slow and simple, master building a pure function and then take things from there.

## (SIMPLE) PURE FUNCTIONS

### Add

Create a pure function that finds the sum of two parameters.

```
function add(x, y) {
    return x + y;
}
console.log(add(2, 2)); // prints 4
```

### Multiply

It's your turn! Build a pure function that multiplies two parameters.

<details><summary>Click to view answer.</summary><p>

```
function multiple(x, y) {
  return x * y;
}
console.log(add(3, 3)); // prints 9
```

</p></details>

## LOOPS

### Maps

#### For Loops Converted into a Map

Here is our `for` loop that adds on to every value in our array.

```
function addOneToCollection(array) {
  for(let i = 0; i < array.length; i ++){
      return array[i] + 1;
  }
}
console.log(addOneToCollection([1, 2, 3])); // prints [2, 3, 4]
```

Now let's go ahead and turn our `for` loop into a map function!

```
function addOneToCollection(array) {
  return array.map((value) => {
      return value + 1;
  }
}
console.log(addOneToCollection([1, 2, 3])); // prints [2, 3, 4]
```

When given a value, the function will unwrap the values into individual parts, feed those parts into the function that it was given and take the return value and rewrap them in a structured form.

##### Your Turn!

Now you take a crack at it! Rewrite the multByTwo function to use map instead of a `for` loop.

```
function multByTwo(array) {
  for(let i = 0; i < array.length; i ++){
      return array[i] *  2;
  }
}
console.log(multByTwo([1, 2, 3])); // prints [2, 4, 6]
```

<details><summary>Click to view answer.</summary><p>

```
function multByTwo(array) {
  return array.map((value) => {
      return value * 2;
  }
}
console.log(multByTwo([1, 2, 3])); // prints [2, 4, 6]
```

</p></details>

### Functors

Functors are objects that have a `.map` method.

### Recursion

### Simple For Loop

A simple for loop in JavaScript.

```
var count = (num) => {
  result = 0
  for (var i = 1; i <= num; ++i)
    result += 1;
  console.log(result);
}

count(10);  // 10
count(50);  // 50
count(500); // 500
```

Now, the above is one of the DUMBEST ways possible to count to 10. Or 50. Or 500. But let's go with it. How would you make this example recursive?

```
function recursionCount(max, num=0){
  if (num < max){
    console.log(num);
    return recursionCount(max, ++num);
  }
  return num;
}

recursionCount(10);  // 10
recursionCount(50);  // 50
recursionCount(500); // 500
```

Now it's your turn! Make a recursive countdown loop in JavaScript.

<details><summary>Click to view answer.</summary><p>

```
function countdown(num) {
  console.log(num);
  if (num >= 1) {
    countdown(num-1);
  }
}
```

</p></details>

Now, let's make things a bit more complicated. Say you're making a new Tamagotchi and need to increment it's age. Below is one way you might set up the logic.

```
class Tamagotchi {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
}

var tommy = new Tamagotchi({
  name: 'Tommy',
  age: 1
})

ageTamagotchi(tommy);

function ageTamagotchi(tamagotchi) {
  setInterval(function(){
    tamagotchiYear(tamagotchi)
  }, 5000);
};

function tamagotchiYear(tamagotchi) {
  setTimeout(function(){
    ageOneYear(tamagotchi)
    console.log(tamagotchi);
  }, 5000);
};

function ageOneYear(tamagotchi) {
  tamagotchi.age++
};
```

But what if we want to make this loop recursive? Well, it would look something like this.

```
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
  };

  ageOneYear() {
    this.age++;
    console.log(this);
  };
}

var tommy = new Tamagotchi({
  name: 'Tommy',
  age: 1
})

tommy.growOlder(100);
```

### Multiply

It's your turn! Build a pure function that multiplies two parameters.

<details><summary>Click to view answer.</summary><p>

```
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
