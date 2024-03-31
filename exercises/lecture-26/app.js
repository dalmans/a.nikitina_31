

/* 1.Функція calculate() приймає масив чисел як аргумент і повертає суму: */
function calculate1(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}
calculate1([1, 2, 4]); // => 7

// sum() - це функція, яка описує операцію додавання. 
function sum(n1, n2) {
    return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.

function multiply(n1, n2) {
    return n1 * n2;

}
/*Зробити calculate() функцією вищого порядку, змусивши її підтримувати операцію додавання над масивом чисел та операцію множення над масивом чисел

calculate(operation, initialValue, numbers) приймає перший аргумент - функцію, яка описує операцію,
 другий аргумент - початкове значення, третій аргумент - масив чисел. */



function calculate(operation, initialValue, numbers) {

    for (let i = 0; i < numbers.length; i++) {

        switch (operation) {
            case sum:
                // console.log('sum');
                initialValue = sum(initialValue, numbers[i]);

                break;
            case multiply:
                // console.log('multiply');
                initialValue = multiply(initialValue, numbers[i]);
                multiply(initialValue, numbers[i]);
                break;
        }
    }
    console.log(initialValue);
    return initialValue;
}

calculate(sum, 0, [1, 2, 4]);      // => 7
calculate(multiply, 1, [1, 2, 4]);  // => 8 


/* 2. Маємо масив student_names
let student_names = ["Wick", "Malcolm", "Smith"]
Застосувати до масиву student_names метод map, щоб отримати на консолі результат у такому вигляді:

name: Wick | index: 0 | array: [ "Wick", "Malcolm", "Smith" ] name: Malcolm | index: 1 | 
array: [ "Wick", "Malcolm", "Smith" ] name: Smith | index: 2 | array: [ "Wick", "Malcolm", "Smith" ]*/

let student_names = ["Wick", "Malcolm", "Smith"];
const student_names2 = student_names.map(function (item, index, array) {
    const entry = `name: ${item} | index: ${index} | array: [ ${array.join(', ')} ]`;
    console.log(entry);
});

/* 3. Маємо масив об'єктів students_information, що представляє результати іспитів кожного студента у полі degree: */

let students_information = [
    { "name": "Wick", "degree": 375 },
    { "name": "Malcolm", "degree": 405 },
    { "name": "Smith", "degree": 453 },
];

/*students_information.forEach(student=>{
   student.percentage = student.degree * 100 / 600;
        console.log(student);
    } );
*/
const stud_inf_with_percentage = students_information.map(student => {
    const percentage = student.degree * 100 / 600;
    return { name: student.name, degree: student.degree, percentage: percentage };
});
stud_inf_with_percentage.forEach(student => {
    console.log(`{ name: "${student.name}", degree: ${student.degree}, percentage: ${student.percentage} }`);
});

/*Максимальна оцінка degree = 600 Розрахувати відсоткове значення отриманої оцінки по кожному студенту, 
використовуючи метод map, та вивести на консоль отриманий результат у такому вигляді: 
{ name: "Wick", degree: 375, percentage: 62.5 } { name: "Malcolm", degree: 405, percentage: 67.5 } { name: "Smith", degree: 453, percentage: 75.5 } ​*/

// 4. Маємо масив: 
// [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
// Використовуючи метод reduce, звести масив до одномірного
// [1, 2, 3, 10, 11, 12, 21, 22, 23, 31, 32, 33, 34, 41, 42]

const arr1 = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];;
const arr2 = [];
arr1.map(function (item) {

    if (!Array.isArray(item)) {
        arr2.push(item);
    }
    if (Array.isArray(item)) {
        item.map(function (item) { arr2.push(item); })
    }

});

console.log(arr2);

// 5. Створити конструктор прототипу масиву upperCase(), що перетворює символи рядка у символи верхнього регістру.


Array.prototype.upperCase = function () {
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] === 'string') {
            this[i] = this[i].toUpperCase();
        }
    }
};

function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}

myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]*/