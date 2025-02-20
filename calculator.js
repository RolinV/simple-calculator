let num1 = Number(prompt('Enter first number:'));
let operator = prompt('Enter operation (+, -, *, /):');
let num2 = Number(prompt('Enter second number:'));

switch (operator) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log('Error');
        }
        break;
    default:
        console.log('Invalid operation. Please enter +, -, *, or /.');
}
