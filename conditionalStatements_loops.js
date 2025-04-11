//Exercise 1: Temperature Check
let temperature = 20; 
if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature <= 15) {
  console.log("It's cold.");
} else if (temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

//Exercise 2: Divisibility Check
let number = 6; 
if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

//Exerise 3: For loops
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));

const moreNumbers = [3, 7, 2, 5, 10, 6];
console.log(Math.max(...moreNumbers));

//Exercise 4: While Loops
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 1;
while (j <= 20) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

let total = 0;
let k = 1;
while (k <= 100) {
  total += k;
  k++;
}
console.log(sum);

let m = 5;
while (m < 50) {
  console.log(m);
  m += 5; 
}

//Exercise 5: Do while loops
let n = 1;
do {
    console.log(n);
    n++;
} while (n <= 10);

let totalSum = 0;
let p = 1;
do {
  totalSum += p;
  p++;
} while (p <= 100);
console.log(totalSum);

let userInput;
do {
  userInput = prompt("Please enter a number greater than 10:");
  userInput = parseInt(userInput); 
} while (userInput <= 10);
console.log("You entered a valid number:", userInput);

const correctNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
let guess;
do {
  guess = prompt("Guess a number between 1 and 10:");
  guess = parseInt(guess); 
  if (guess < correctNumber) {
    console.log("Too low! Try again.");
  } else if (guess > correctNumber) {
    console.log("Too high! Try again.");
  }
} while (guess !== correctNumber);
console.log("Congratulations! You guessed the correct number:", correctNumber);




