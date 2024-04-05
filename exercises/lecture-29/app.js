/*Створити клас AuthException, розширивши клас Error.
 В методі constructor(code, message) визначити властивість this.message, що дорівнює code: message або code, якщо message не передано як аргумент.*/

class AuthException extends Error {
  constructor(code, message) {
    this.message = message;
    //this.message;
    if (!message) {
      super(code);
    } else {
      super(`${code}: ${message}`);
    }
  }

  toString() {
    return this.message;
  }
}
/*Створіть змінну checkAuth, яка дорівнює результату пошуку селектора з класом check-auth у файлі index.html.*/

let checkAuth = document.querySelector('.check-auth');
let isAuth = (checkAuth) => checkAuth ?? false;


/*За допомогою addEventListener, виконайте обробку події click на змінній checkAuth.
 Функція зворотного зв'язку обробки цієї події повинна запускати блок try { } catch(e) {}.*/

let dialogBoxId = document.getElementById("dialogBox");

checkAuth.addEventListener('click', function () {
  try {
    if (!isAuth(false)) {
      throw new AuthException('FORBIDDEN', "You don't have access to this page");
    }
    else {
      window.open('success.html', '_self');
    }
  } catch (e) {
    showDialog(e);
    const messageExs = dialogBoxId.querySelector('.message');
    messageExs.textContent = e.message;
  }
});


function showDialog(e) {
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });

  dialogBoxId.showModal();
}

function closeDialog() {
  dialogBoxId.close();
}

