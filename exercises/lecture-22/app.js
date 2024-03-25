const classes = ['first', 'second', 'third', 'fourth'];
/*1. Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір.
Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.*/

var h1Elements = document.querySelectorAll('h1');

console.log("Тип отриманого об'єкту: " + typeof h1Elements + ", Його розмір: " + h1Elements.length)


for (var i = 0; i < h1Elements.length; i++) {
    console.log(h1Elements[i]);
}


/*2. Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1.
 Встановити для нього стиль background-color = "gold"*/

const pFirst = document.querySelector("#p1");
pFirst.style.backgroundColor = "gold";


/*3. Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. 
Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;*/
const pSecond = document.querySelector("#p2");
pSecond.style.backgroundColor = "gold";
pSecond.style.color = "blue";
pSecond.style.fontSize = "2rem";

/*4.Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. 
Призначити для нього клас third */

const pThird = document.querySelector("#p3");
pThird.classList.add('third');
console.log(pThird);


/*5. Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. 
Призначити для нього класи fourth та border*/

const pFourth = document.querySelector("#p4");
pFourth.classList.add('fourth');
pFourth.classList.add('border');

console.log(pFourth.className);

/*6. Знайти всі елементи з класом container. Використовуючи цикл for, 
вивести на консоль перший елемент для кожного зі знайдених елементів .*/

let findElContainer = document.querySelectorAll('.container');
for (let j = 0; j < findElContainer.length; j++) {
    console.log(findElContainer[j].firstElementChild);
}

/*7.Знайти всі елементи з класом container. Використовуючи цикл for, 
вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.*/

for (let j = 0; j < findElContainer.length; j++) {
    //  console.log(findElContainer[j].firstElementChild.innerHTML);
    console.log(findElContainer[j].firstElementChild.textContent);

}

/*8. Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. 
Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином*/
/*
перший залишити h1
другий замінити на h2
третій замінити на h3
четвертий замінити на h4 зберегти початкові атрибути id та class
Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи таким чином

до h1 додати клас first
до h2 додати клас second
до h3 додати клас third
до h4 додати клас fourth*/

const headers = document.querySelectorAll('.container header');

for (var i = 0; i < headers.length; i++) {
    console.log(headers[i]);
}
var h2 = document.createElement('h2');
var h3 = document.createElement('h3');
var h4 = document.createElement('h4');

for (var i = 0; i < headers.length; i++) {
    switch (i) {
        case 1:
            h2.innerHTML = headers[i].firstElementChild.innerHTML;
            headers[i].parentNode.replaceChild(h2, headers[i]); 
            break;
        case 2:
            h3.innerHTML = headers[i].firstElementChild.innerHTML;
            headers[i].parentNode.replaceChild(h3, headers[i]); 
            h3.classList.add('third')
            break;
        case 3:
            h4.innerHTML = headers[i].firstElementChild.innerHTML;
            h4.id = headers[i].firstElementChild.id; 
            h4.className = headers[i].firstElementChild.className; 
            headers[i].parentNode.replaceChild(h4, headers[i]);
            h4.classList.add('fourth'); 
       
            break;
        default:
            break;
    }
}
