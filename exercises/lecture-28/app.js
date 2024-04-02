/*
Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.

Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.

Виконати базову перевірку:

ім’я користувача не може бути пустим,
електронна адреса має бути у правильному форматі,
пароль має містити принаймні 8 символів,
пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку.
Повідомлення про помилки відображаються в розділі errorMessages.

Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.*/


const form = document.getElementById('registrationForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // вичищає попередні повідомлення про помилки
    errorMessages.innerHTML = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (!username) {
        displayError('Ім’я користувача не може бути пустим.');
        return;
    }

    if (!emailIsValid(email)) {
        displayError('Електронна адреса має бути у правильному форматі.');
        return;
    }

    if (password.length < 8) {
        displayError('Пароль має містити принаймні 8 символів.');
        return;
    }

    if (!passwordComplexityCheck(password)) {
        displayError('Пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.');
        return;
    }

    //Якщо перевірка пройдена, форма відправляється і значення полів скидається 
    form.reset();
});

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function passwordComplexityCheck(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;
    return regex.test(password);
}

function displayError(errorMessage) {
    const errorElement = document.createElement('p');
    errorElement.textContent = errorMessage;
    errorMessages.appendChild(errorElement);
}






