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

function calculate(weight, planet) {
    let gravity;
    if (planet.toLowerCase() === 'mars') {
        gravity = 0.38;
    } else if (planet.toLowerCase() === 'jupiter') {
        gravity = 2.34;
    } else if (planet.toLowerCase() === 'moon') {
        gravity = 0.16;
    } else {
        return 'Invalid planet, please choose from the three already suggested';
    }

    let planetWeight = weight * gravity;
    return `Your weight on ${planet} would be ${planetWeight.toFixed(2)} kg!`;
}

let weight = parseFloat(prompt('Enter your weight in kg:'));
let planet = prompt('Enter the name of one of the planets listed: Mars, Jupiter, or Moon');

if (isNaN(weight) || weight <= 0) {
    alert('enter a valid number!');
}

let result = calculate(weight, planet);
console.log(result);
alert(result);