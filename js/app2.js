//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
let number = prompt("Введіть п'ятизначне число:");

if (number.length !== 5) {
    alert("Будь ласка, введіть п'ятизначне число.");
} else {
    let digit5 = Math.floor(number / 10000);
    let digit4 = Math.floor((number % 10000) / 1000);
    let digit3 = Math.floor((number % 1000) / 100);
    let digit2 = Math.floor((number % 100) / 10);
    let digit1 = number % 10;

    alert(digit5 + " " + digit4 + " " + digit3 + " " + digit2 + " " + digit1);
}