/*
1. Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. 
Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль*/

var person = {
    name: "Anna",
    age: 25
};


console.log("Ім'я: " + person.name);
console.log("Вік: " + person.age);
/*
2. Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. 
Вивести значення властивостей об'єкту на консоль.*/
person.name = {
    firstName: "Anna",
    lastName: "Nik"
};

/*
3. Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.*/
person.bio = function () {
    console.log("Name: " + this.name.firstName + ", " + "Last name: " + this.name.lastName + ", " + "Age: " + this.age);

};

person.bio();
/*
4. Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.*/
person.introduceSelf = function () {
    console.log("Hi! I'm " + this.name.firstName)
}
person.introduceSelf();

/*
5.Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf.
 Створити за допомогою createPerson 2 екземпляри об'єкта.*/

function createPerson(name) {
    return {

        name: name,
        introduceSelf: function () {
            console.log("Hi! I`m " + this.name);
        }
    };
}

var person1 = createPerson("Alex");
var person2 = createPerson("Anton");
person1.introduceSelf();
person2.introduceSelf();
/*
6.Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. 
Створити за допомогою Person 2 екземпляри об'єкта mary та tom. */

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log("Hi, I am " + this.name);
    };
}

var mary = new Person("Mary");
var tom = new Person("Tom");
mary.introduceSelf();
tom.introduceSelf();

/*
7. Брудний мартіні – ідеальний коктейль для любителів оливкового. Його можна приготувати на горілці чи джині за таким рецептом.
    ingredients:
        6 fluid ounces gin
        1 dash dry vermouth
        1 fluid ounce brine from olive jar
        4 stuffed green olives
fluid ounces - одиниця ваги avoirdupois - одна шістнадцята фунта (28.4131 грамів). Офіційно dash становить приблизно 1 мл, 10 крапель або 1/5 чайної ложки.

Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() При виклику методу excuse_my_french(), на консоль виводиться:

      ingrédients:  
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml) 
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies

При виклику методу english_please(), на консоль виводиться:

      ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives*/

var DirtyMartini = {
    excuse_my_french: function () {
        console.log("ingrédients: \n 170.4786 ml de gin \n 1 trait de vermouth sec (0.0351951ml)\n  28.4131 ml de saumure du pot d'olive \n 4 olives vertes farcies");
    },
    english_please: function () {
        console.log("ingredients:\n  6 fluid ounces gin\n  1 dash dry vermouth (0.0351951ml)\n  1 fluid ounce brine from olive jar\n  4 stuffed green olives");

    }


};
DirtyMartini.english_please();
DirtyMartini.excuse_my_french();