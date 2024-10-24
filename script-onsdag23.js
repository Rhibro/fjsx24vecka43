// ONSDAG 23OKT V43 ÖVNINGAR

// ÖVNING 1 

// let userNum = Number(prompt('enter a number between 1 and 10:'));
// let number = parseInt(userNum); //converts input into a number

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// ÖVNING 2

// for (let i = 10; i >= 1; i--) {
//     console.log(`${i}`);
// }

// ÖVNING 3

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         sum += i;
//     }
// }
// console.log(`The sum is ${sum}`);

// ÖVNING 4

// let currentValue = 0;
// let quit = false;

// while (!quit) {

//     let operation = prompt('enter +, -, or "q" to quit');

//     if (operation === 'q') {
//         quit = true;
//         break;
//     }

//     let number = parseFloat(prompt('enter a number:'));

//     if (operation === '+') {
//         currentValue += number;
//     } else if (operation === '-') {
//         currentValue -= number;
//     } else {
//         console.log('invalid operator');
//     }

//     console.log(`current value ${currentValue}`);

// }

// console.log(`Final value: ${currentValue}`);

// ÖVNING 5

// // Prompt the user for the number of terms in the Fibonacci sequence
// let numberOfTerms = parseInt(prompt("Enter the number of terms for the Fibonacci sequence:"));

// // Initialize the first two terms of the sequence
// let n1 = 0, n2 = 1, nextTerm;

// // Handle edge cases
// if (numberOfTerms <= 0) {
//   console.log("Please enter a positive integer.");
// } else if (numberOfTerms === 1) {
//   console.log(`Fibonacci sequence: ${n1}`);
// } else {
//   // Print the first two terms
//   console.log("Fibonacci sequence:");
//   console.log(n1); // First term
//   console.log(n2); // Second term

//   // Generate the rest of the Fibonacci sequence
//   for (let i = 3; i <= numberOfTerms; i++) {
//     nextTerm = n1 + n2;  // Calculate the next term
//     console.log(nextTerm); // Print the next term

//     // Update values for the next iteration
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }


// ÖVNING 6

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 5;
// for (let i = 0; i < attempts; i++) {
//     let guess = Number(prompt(`Guess a number between 1-100. You have ${attempts} attempts.`));

//     if (guess === randomNumber) {
//         console.log('Congarts, you guessed it!');
//         break;
//     } else if (guess < randomNumber) {
//         console.log('Too low!');
//     } else if (guess > randomNumber){
//         console.log('Too high!');
//     }

//     if (i === attempts - 1) {
//         console.log(`You lose, the correct number was ${randomNumber}`);
//     }
// }

// ÖVNING 7

// let quit = false;

// while (!quit) {
//     let menu = parseInt(prompt('Would you like to 1. View date 2. View time 3. Exit?'));

//     if (menu === 3) {
//         quit = true;
//         break;
//     }

//     if (menu === 1) {
//         console.log('The date is 24/10/2024');
//     } else if ( menu === 2) {
//         console.log('The time is 14:50');
//     } else {
//         console.log('invalid option');
//     }
// }
//  console.log('exited');

// ÖVNING 8

// let text = prompt("Please enter a text:").toLowerCase();

// // Initialize a counter for vowels
// let vowelCount = 0;

// // Define the vowels we want to count
// let vowels = "aeiouy";

// // Iterate over each character in the text
// for (let i = 0; i < text.length; i++) {
//   let char = text.charAt(i); // Get the current character

//   // Check if the character is a vowel
//   if (vowels.includes(char)) {
//     vowelCount++; // Increment the counter if it is a vowel
//   }
// }

// // Print the result
// console.log(`The number of vowels in the text is: ${vowelCount}`);

// ÖVNING 9

// // Ask the user to enter a positive integer
// let n = parseInt(prompt("Please enter a positive integer:"));

// // Initialize a variable to hold the result (factorial) and start it at 1
// let factorial = 1;

// // Check if the input is a valid positive integer
// if (n < 0) {
//   console.log("Please enter a positive integer.");
// } else {
//   // Use a for loop to calculate the factorial of n
//   for (let i = 1; i <= n; i++) {
//     factorial *= i;  // Multiply the current value of factorial by i
//   }

//   // Print the result
//   console.log(`${n}! = ${factorial}`);
// }

// ÖVNING 10

// Ask the user to enter a text
let text = prompt("Please enter a text:");

// Convert the text to lowercase and remove any spaces (optional, to handle phrases like "A man a plan a canal Panama")
text = text.toLowerCase().replace(/\s+/g, '');

// Initialize a flag to track whether the text is a palindrome
let isPalindrome = true;

// Use a for loop to compare characters from both ends of the text
for (let i = 0; i < text.length / 2; i++) {
  if (text[i] !== text[text.length - 1 - i]) {
    isPalindrome = false; // If characters don't match, it's not a palindrome
    break;
  }
}

if (isPalindrome) {
  console.log("The text is a palindrome.");
} else {
  console.log("The text is not a palindrome.");
}
