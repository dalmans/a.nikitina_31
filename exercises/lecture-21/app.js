const fruitsStr = 'apple banana cantaloupe blueberries grapefruit';
/* 1. Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.*/

const fruits = fruitsStr.split(' ')
console.log(fruits[2]);
/* 2. Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.*/
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

/* 3. Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.*/
var n = 0;
while (n < fruits.length) {
    console.log(fruits[n])
    n++;
}

/* 4. Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.*/
a = 0;
do {
    a++;
    console.log(fruits[a])
} while (a < fruits.length - 1)


/* 5. Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits. */
console.clear();
for (fruit of fruits) {
    console.log(fruit)
}

/* 6. Маємо масив Numbs.

const Numbs = [1,2,3,4,5,6,7,8,9,10];
Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs. */

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (number of Numbs) {
    if (number % 2 == 0) {
        console.log(number)
    }

}
/*
for ( var j = 0; j< Numbs.length; j++ ){
    if (j%2 ==0){
        console.log(j)   
    }
} */

/* 7. Маємо масив names:
const names = ['Batman'];
Додати 'Joker' в кінець масиву names:*/
const names = ['Batman'];
names.push('Joker');
console.log(names);

/* 8. Маємо масив names:
const names = ['Batman'];
Додати 'Joker' на початок масиву names */

names.unshift('Joker');
console.log(names);

/* 9. Маємо масив names:
names = ['Batman', 'Joker', 'Bane'];
Додати 'Catwoman' на початок масиву names, використовуючи метод unshift */
let names1 = ['Batman', 'Joker', 'Bane'];
names1.unshift('Catwoman');
console.log(names1);

/* 10. Маємо масив names:
names = ['Batman', 'Joker', 'Bane'];
Додати 'Catwoman' на початок масиву names, використовуючи оператор ... */
let names2 = ['Batman', 'Joker', 'Bane'];

names2 = ['Catwoman', ...names2];
console.log("Масив names2" + names2);

/* 11. Маємо масив names
names = ['Batman', 'Joker', 'Bane'];
Додати до names елемент 'Catwoman', розмістивши його з індексом 1 */
let names3 = ['Batman', 'Joker', 'Bane'];
names3.splice(1, 0, 'Catwoman');
console.clear();
console.log(names3);


/* 12. Маємо масив names
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
Видалити елементи 'Catwoman' і 'Joker' з масиву names: */

const catwomanIndex = names3.indexOf('Catwoman');
names3.splice(catwomanIndex, 1);
const jokerIndex = names3.indexOf('Joker');
names3.splice(jokerIndex, 1);
console.log(names3);

/* 13. Маємо масив names:
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names */
console.clear();

const names4 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

for (let i = 0; i < names4.length; i++) {
    if (names4[i] === 'Catwoman' || names4[i] === 'Joker') {
        names4[i] = 'Alfred';
    }
}

console.log(names4);

/* 14. Маємо масив names:
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву. */

const names5 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

for (let i = 0; i < names5.length; i++) {
    if (!names5.includes('Alfred')) {
        names5.push('Alfred');
    }
}
console.log(names5);

/* 15. Маємо масив names:
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву. */
for (let i = 0; i < names5.length; i++) {
    if (names5.includes('Alfred')) {
        const alfredIndex = names5.indexOf('Alfred');
        names5.splice(alfredIndex, 1);

    }
}
console.log(names5);