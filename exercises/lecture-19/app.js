/*
1. Маємо код
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2. */
/*
Так, рядки мають однакову довжину*/


let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
if (str1 === str2) {
    console.log("equal");
} else {
    console.log("not equal");
}
if (str1 == str2) {
    console.log("equal");
} else {
    console.log("not equal");
}
console.log(str1.length);
console.log(str2.length);
console.log(str1.length == str2.length);
/*
2. Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
let string5 = 'Hello World';*/
let string5 = 'Hello World';
let string5FirstSymbol = string5.charAt(0);
let first1 = string5[0]
console.log(string5FirstSymbol);
console.log("перший символ рядка string5 - "+first1);


/*
3. повернути символ J рядка str3:
let str3 = "Hello Javascript";*/
let str3 = "Hello Javascript";
let pattern = /J/;
str3.match(pattern);
console.log(str3.match(pattern));
// або:
console.log(str3[6]);

/*
4. Використовуючи індекс, отримати доступ до останнього символу рядка двома способами*/

let str3LastSymbol = str3.charAt(str3.length - 1);
let str3LastSymbol1 = str3[str3.length - 1];

console.log(str3LastSymbol);
console.log(str3LastSymbol1);

/*
5. Напишіть три варіанти функції lastChar, що повертає останній символ рядка*/

function lastChar(text) {
    return (str3.charAt(str3.length - 1));
}

function lastChar1(text) {
    return (str3[str3.length - 1]);
}

function lastChar2(text) {

    return (str3.match(/.$/)[0]);
    return matchResult ? matchResult[0] : null;
}

console.log(lastChar(str3));
console.log(lastChar1(str3));
console.log(lastChar2(str3));

/*
6. Маємо код

let a = 'When candles are out,';
let b = 'all cats are grey.';
Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey*/

let a = 'When candles are out, ';
let b = 'all cats are grey.';
let aAndb = a.concat(b);
console.log(aAndb);

/*
7. Маємо код
let fact = "Fifteen is the same as"
let a = 5;
let b = 10;
Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15*/
let fact = "Fifteen is the same as"
let aa = 5;
let bb = 10;
let sum = aa + bb;
console.log(fact + " " + sum);

/**
 8. Маємо код
let firstName = "Tom";
let lastName = "Cat";
Напишіть функцію getFullName, що повертає результат: "Tom Cat"
 */
let firstName = "Tom";
let lastName = "Cat";
function getFullName() {
    return (firstName + " " + lastName);
}
console.log(getFullName());

/*
9. Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!*/

function greeting() {
    return ("Hello," + " " + getFullName() + "!");
}
greeting();

/*
10. Використовуючи функцію greeting, створити такий шаблон:

<div><h1>Hello, Tom Cat!</h1></div>
*/
let c = `<div><h1>${greeting()}</h1></div>`;
let textObj = document.querySelector('.hello');
textObj.innerHTML = c;

//Простіший варіант:
let template = ("" +""+greeting (firstName, lastName)+" " + " ");
    console.log(template);


/*
11. Маємо наступний код:
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"


const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'
*/
let string1 = "  The name of our game  ";
console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());

const phoneNumber = '\t  555-123\n ';
const phoneNumber1 = phoneNumber.trim().replace(/^\s+/g, '').replace(/\s+$/g, '');
console.log(phoneNumber1);
console.log(phoneNumber1 + ' \\n');


/**
 * 12. Маємо наступний код:
let sentence = 'Always look on the bright side of life';
Перевірити, чи містить рядок значення 'look up'
Перевірити, чи містить рядок значення 'look on'
Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
 */
let sentence = 'Always look on the bright side of life';
const lookUp = sentence.includes('look up');
console.log(lookUp); //no
const lookOn = sentence.includes('look on');
console.log(lookOn);   //yes


let search_result = sentence.search('look on');
if (search_result >= 8) {
    console.log("'look on' is found at position : " + search_result);
} else {
    console.log("'look on' not found.");
}

/**
 * 13. Маємо наступний код
let sentence = 'Always look on the bright side of life';
Знайти індекс символу 'l'
Знайти індекс символу 'l', починаючи з 3-ї позиції
Знайти індекс символу 'L'
 */

let firstVariant = sentence.search('l');
console.log("індекс символу 'l' " + firstVariant);
let secondVariant = sentence.search('L');
console.log("індекс символу 'L'" + secondVariant);
let thirdVariant = sentence.indexOf('l', 3);
console.log("індекс символу 'l', починаючи з 3-ї позиції " + thirdVariant)

/**
 * 14. Маємо наступний код:
let sentence = 'Always look on the bright side of life';
Отримати підрядок 'look on the bright side of life'
Отримати підрядок 'Always'
Отримати підрядок 'look'
 */

let subString1 = sentence.match("look on the bright side of life");
let subString2 = sentence.match("Always");
let subString3 = sentence.match("look");
console.log(subString1);
console.log(subString2);
console.log(subString3);

/**
15. Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. 
Довжину імені користувача встановити від 8 до 16 знаків.
 */

let nameUser = "anna-_955";
let regex = /^[a-z-0-9_\-]{8,16}$/;
if (regex.test(nameUser)) {
    console.log(nameUser);
}
/*
16.Створити регулярний вираз, який призначений для перевірки email на коректність.
*/
let email = "anna@gmail.com";
let regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (regex1.test(email)) {
    console.log(email);
}

/*
17. Маємо наступний код:

let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. 
Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr*/

let sentence1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
var sentence2;
var sentence3;
function truncateText1() {
    sentence2 = sentence1.substring(0, 50);
    console.log(sentence2);
}
function truncateText() {
    sentence3 = sentence1.substr(0, 50);
}
console.log(sentence3);
truncateText1();
truncateText();