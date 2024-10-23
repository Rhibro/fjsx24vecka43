// övning 1

// let temp = Number(prompt('Please enter a temp in Celsius:'))

// if (temp > 30) {
//     console.log('It is very hot outside!');
// } else if (temp < 30 && temp > 20) {
//     console.log('It is hot outside');
// }else if (temp < 20 && temp > 10) {
//     console.log('It is cool outside');
// } else if (temp < 10) {
//     console.log('It is cold outside');
// }

//  övning 2 

// let grade = Number(prompt('Please enter a number between 0 and 100:'));

// if (grade === 100 || grade > 90) {
//     console.log('A');
// }else if (grade < 90 && grade > 79) {
//     console.log('B');
// }else if (grade < 80 && grade > 69) {
//     console.log('C');
// }else if (grade < 70 && grade > 59) {
//     console.log('D');
// }else if (grade < 59) {
//     console.log('F');
// }

// övning 3

// let customer = prompt('Are you a New or Recurring customer?');
// let price = Number(prompt('Please enter your purchase amount:'));
// let discount = 0;

// if (customer === 'Recurring' && price > 500) {
//     discount = 0.15;
// }else if (customer === 'New' && price > 500) {
//     discount = 0.10;
// }

// let finalPrice = price * (1 - discount);
// alert(`The final price is: SEK ${finalPrice}`);

// övning 4

// function validatePassword(password) {
//     if (password.length < 8) {
//         return 'Password is not long enough';
//     } if (!/\d/.test(password)) {
//         return 'Password must conatin one digit';
//     } if (!/[A-Z]/.test(password)) {
//         return 'Password must contain one uppercase letter';
//     } return 'Password is accepted';
// }

// let password = prompt('Enter a password');

// alert(validatePassword(password));

// övning 5 

// let trafficLight = prompt('Please write a traffic light colour: "red", "yellow", or "green"').toLocaleLowerCase();

// if (trafficLight === 'red') {
//     console.log('Stop!');
// } else if (trafficLight === 'yellow') {
//     console.log('Prepare to stop!');
// } else if (trafficLight === 'green') {
//     console.log('Run!');
// } else {
//     console.log('Please choose one of the three options');
// }

// övning 6

// let num = Number(prompt('Please enter a number between 0 and 5:'));

// switch (num){
//     case 0:
//         num = 'Zero';
//         break;
//     case 1:
//         num = 'One';
//         break;
//     case 2:
//         num = 'Two';
//         break;
//     case 3:
//         num = 'Three';
//         break;
//     case 4:
//         num = 'Four';
//         break; 
//     case 5:
//         num = 'Five';
//         break;
//     default:
//         num = 'Please enter a vaild number between 0 and 5';      
// }

// console.log(`${num}`);

// övning 7

// function calculate(weight, planet) {
//     let gravity;
//     if (planet.toLowerCase() === 'mars') {
//         gravity = 0.38;
//     } else if (planet.toLowerCase() === 'jupiter') {
//         gravity = 2.34;
//     } else if (planet.toLowerCase() === 'moon') {
//         gravity = 0.16;
//     } else {
//         return 'Invalid planet, please choose from the three already suggested';
//     }

//     let planetWeight = weight * gravity;
//     return `Your weight on ${planet} would be ${planetWeight.toFixed(2)} kg!`;
// }

// let weight = parseFloat(prompt('Enter your weight in kg:'));
// let planet = prompt('Enter the name of one of the planets listed: Mars, Jupiter, or Moon');

// if (isNaN(weight) || weight <= 0) {
//     alert('enter a valid number!');
// }

// let result = calculate(weight, planet);
// console.log(result);
// alert(result);

// övning 8 

// let question1 = prompt('Name the largest country by size:').toLocaleLowerCase();
// let question2 = prompt('Name the second largest country by size:').toLocaleLowerCase();
// let question3 = prompt('Name the third largest country by size:').toLocaleLowerCase();

// let point1 = 0;
// let point2 = 0;
// let point3 = 0;


// if (question1 === 'russia') {
//     point1 = 1;
// } 

// if (question2 === 'canada') {
//     point2 = 1;
// } 

// if (question3 === 'china') {
//     point3 = 1;
// } 

// let finalPoints = point1 + point2 + point3;

// console.log(`You got ${finalPoints} points`);

// övning 9 

// let email = prompt('Please enter your email:');

// if (email.includes('@') && email.includes('.')) {
//     console.log('The email is valid');
// } else {
//     console.log('The email is invalid');
// }

// övning 10 

// let pin = '1234'; // correct pin
// let attempts = 3; // how many attempts you have to write the right pin
// let userPin; // to store user input

// for (let i = 0; i < attempts; i++) {
//     userPin = prompt('Enter your pin:');

//     if (userPin === pin) {
//         console.log('Welcome!');
//         break; // exit the loop if the pin is correct
//     }else{
//         console.log(`Incorrect pin. You have ${attempts - (i + 1)} attempt(s) left.`);
//     }

//     if (i === attempts - 1) {
//         console.log('Card blocked.');
//     }
// }

// övning 11 

// let selectedDish = Number(prompt('Please choose a dish by entering its number: 1 for potatoes, 2 for beets, 3 for apples'));
// let potatoes = '$5';
// let beets = '$3';
// let apples = '$20,000';

// if (selectedDish === 1) {
//     console.log(`You chose potatoes, that will cost ${potatoes}`);
// }else if (selectedDish === 2) {
//     console.log(`You chose beets, that will cost ${beets}`);
// }else if (selectedDish === 3) {
//     console.log(`You chose apples, that will cost ${apples}`);
// }else{
//     console.log('You did not choose form the list, please try again.');
// }

// övning 12

//  let userSpeed = Number(prompt('Please enter your speed:'));

// if (userSpeed > 120) {
//     console.log('Too fast!');
// }else if (userSpeed < 120 && userSpeed > 79) {
//     console.log('Approved speed');
// }else if (userSpeed < 80) {
//     console.log('Too slow');
// }

// userSpeed > 120 
//     ? console.log('Too fast!')
//     : userSpeed > 79 
//     ? console.log('Approved speed')
//     :console.log('Too slow');


// övning 13

// let sek = Number(prompt('Enter amount in SEK:'));
// let conversionRate = 10; // 1 EUR = 10 SEK

// let inEur = sek / conversionRate;
// // formatted to 2 decimal places
// console.log(`The amount in EUR is ${inEur.toFixed(2)}`);


// övning 14

// let userAge = Number(prompt('enter your age:'));

//     userAge < 13
//         ? console.log('Animated Movie!')
//         : userAge > 13 && userAge < 18       
//         ? console.log('Youth Film')
//         : console.log('Adult Film');

// övning 15

// let num1 = Math.floor(Math.random() * 10) + 1;
// let num2 = Math.floor(Math.random() * 10) + 1;

// let userSvar = Number(prompt(`What is ${num1} * ${num2}?`));

// let correctSvar = num1 * num2;

// if (userSvar === correctSvar) {
//     console.log('Correct!');
// }else{
//     console.log(`Incorrect! The correct anwser was ${correctSvar}`);
// }

// övning 16



