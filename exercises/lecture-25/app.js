
/*1. Маємо масив list*/
const list = ['html', 'css', 'javascript', 'react.js'];
/*Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку. */

const ulElement = document.createElement("ul");
const addElToSite = function (tag) {
    const liElement = document.createElement("li");
    liElement.textContent = tag;
    ulElement.appendChild(liElement);
}
list.forEach(addElToSite);
document.body.appendChild(ulElement);

// 2. Маємо масив listWithHref

const listWithHref = [
    { 'html': "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { 'css': "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { 'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { 'react.js': "https://react.dev" }
];
/*Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, 
де кожний елемент списку є тегом a з відповідним посиланням. Наприклад, для першого елемента списку:
 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>

 Додайте створений список на сторінку.
*/

const olElement = document.createElement("ol");

listWithHref.forEach(item => {

    const [name, href] = Object.entries(item)[0];
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = href;
    a.textContent = name;
    li.appendChild(a);
    olElement.appendChild(li);
});
document.body.appendChild(olElement);


// 3. Маємо масив students
const students = [
    { 'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230 },
    { 'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336 },
    { 'firstName': 'John', 'lastName': 'Doe', 'degree': 400 },
    { 'firstName': 'James', 'lastName': 'Bond', 'degree': 700 },
]

/*Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків таблиці - firstName, lastName, degree. 
Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку.*/

const tableElement = document.createElement('table');
const trH = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
th1.textContent = 'firstName';
th2.textContent = 'lastName';
th3.textContent = 'degree';
document.body.appendChild(tableElement);
tableElement.appendChild(trH);
trH.appendChild(th1);
trH.appendChild(th2);
trH.appendChild(th3);


students.forEach(student => {
    const tr = document.createElement('tr');

    ['firstName', 'lastName', 'degree'].forEach(property => {
        const cell = document.createElement('td');
        cell.textContent = student[property];
        tr.appendChild(cell);
    });
    tableElement.appendChild(tr);
});

document.body.appendChild(tableElement);