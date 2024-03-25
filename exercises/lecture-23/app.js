const alert = document.querySelector('.alert');
/*
1. Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick. 
Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert 
та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!". */
var alertBtn = document.querySelector('.alert');
var btnPrimary = document.querySelector('.btn-primary');

btnPrimary.onclick = function () {
    console.log('Кнопка з класом btn-primary була натиснута!');

    if (alertBtn) {
        alertBtn.classList.add('alert-primary');
        alertBtn.textContent = "A simple primary alert—check it out!";
    }

};

/*
2. Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click".
 Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert 
 та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"*/
var btnSecondary = document.querySelector('.btn-secondary');
if (btnSecondary) {
    btnSecondary.addEventListener('click', function () {
        alertBtn.classList.add('alert-primary');
        alertBtn.textContent = "A simple secondary alert—check it out!";
    });

}

/*
3. Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover". 
Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з id = alert 
та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!" */

var btnSuccess = document.querySelector('.btn-success');
if (btnSuccess) {
    btnSuccess.addEventListener('mouseover', function () {

        // console.log('Кнопка з класом btn-success була натиснута!');
        alertBtn.classList.add('alert-primary');
        alertBtn.textContent = "A simple success alert—check it out!";
    });

}

/* 3.1 Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout,
 що видаляє CSS-клас alert-success з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.*/

if (btnSuccess) {
    btnSuccess.addEventListener('mouseout', function () {
        alertBtn.classList.remove('alert-primary');
        alertBtn.textContent = " ";
    });
}

/*
4. Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus". 
Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert 
та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!" Додати до кнопки прослуховувач події "focusout". 
Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert 
та змінює значення властивості textContent цього елемента на пустий рядок. */

var btnDanger = document.querySelector('.btn-danger');
if (btnDanger) {
    btnDanger.addEventListener('focus', function () {
        alertBtn.classList.add('alert-danger');
        alertBtn.textContent = "A simple danger alert—check it out!";
    })
    btnDanger.addEventListener('focusout', function () {
        alertBtn.classList.add('alert-danger');
        alertBtn.textContent = " ";
    });

}

/* 
5. Знайти на сторінці кнопки з класом btn-dark та btn-light. Написати функцію toggleMode,
 що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle(). 
 Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку. 
 Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки,
  якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light*/

var btnDark = document.querySelector('.btn-dark');
var btnLight = document.querySelector('.btn-light');
btnDark.addEventListener('click', toggleMode);
btnLight.addEventListener('click', toggleMode);


function toggleMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        btnLight.style.display = 'block';
        btnDark.style.display = 'none';
    } else {
        btnLight.style.display = 'none';
        btnDark.style.display = 'block';
    }
}

/* 
6. Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". 
Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter".
 Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault().
  Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert 
  та змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";*/

  var btnInfo = document.querySelector('.btn-info');
  btnInfo.addEventListener('keypress', function(event) {

    if (event.keyCode === 13 || event.which === 13) {
        event.preventDefault();
        alertBtn.classList.add('alert-info');
        alertBtn.textContent = "A simple info alert—check it out!";
     }
});


/*
7. Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом .card-title*/

const cards =document.querySelectorAll('.card');
for(var i = 0; i<cards.length; i++){
    var cardTitle = cards[i].querySelector('.card-title');
    console.log(cardTitle.textContent);
}

/*
8. Знайти на сторінці всі селектори .card. Використовуючи цикл for, знайти для кожного елемента .card кнопку з класом .add-to-cart, 
додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст кожного елемента з класом .card-title*/
for(var i = 0; i<cards.length; i++){

    var cardBtn = cards[i].querySelector('.add-to-cart');
    cardBtn.addEventListener('click', function(){
        var cardTitle = this.closest('.card').querySelector('.card-title');
        console.log(cardTitle.textContent);
    })
}