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

{{ MADISON }}

### Rewrite A For Loop as a Map

### Functors
A functor is a map that's loopable — something you can call `.map` on. 

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

Now, the above is one of the DUMBEST ways possible to count to 10. Or 50. Or 500. But say you're making a new Tamagotchi and need to increment it's age. Below is one way you might set up the logic. 

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
}

var tommy = new Tamagotchi({
  name: 'Tommy',
  age: 1
})

ageTamagotchi(100, tommy);

function ageTamagotchi(value, tamagotchi) {
  setTimeout(function () { 
    currentAge = tamagotchi.properties.age;
    if (currentAge < value) {
      addOneYear(tamagotchi);
      return ageTamagotchi(value++, tamagotchi);
    } else {
      return currentAge;
    }
  }, 500);
};

function ageOneYear(tamagotchi) {
  tamagotchi.age++
};
```



```
var age = () => {
  age = 0
  for (var i = 1; i <= 1000; ++i)
      result += 1;
  console.log(result);
}

count(10);  // 10
count(50);  // 50
count(500); // 500

```

```
var thing = 0;
for (var i = 1; i <= 100; ++i)
    thing = 2;
console.log(thing)


```
var count = 0;
for (var i = 1; i <= 10; ++i)
    count += i;
console.log(count); // prints 55
```
// without loop construct or variables (recursion)
function sumRange(start, end, acc) {
    if (start > end)
        return acc;
    return sumRange(start + 1, end, acc + start)
}
console.log(sumRange(1, 10, 0)); // prints 55

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
EXTRA
MONAD
REFACTOR A PROGRAM
Pipes? Chaining? 


