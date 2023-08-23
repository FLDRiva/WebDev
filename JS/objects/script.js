// СИНТАКСИС

// СОЗДАНИЕ ОБЪЕКТА

// let userInfo = new Object(); // синтаксис "конструктор объекта"
// let userInfo = {}; // синтаксис "литерал объекта"

// Свойства объектов. КЛюч + значение

// let userInfo = {
//     name: "Вася",
//     age: 30,
// };

// Имя свойств из двух и больше слов 
// let userInfo = {
//     name: 'Andrey',
//     age: '29',
//     'likes javascript': 20,
// };
// console.log(userInfo);
// console.log(userInfo['likes javascript']);

// Вычисляем имя
// let firstPart = 'likes';
// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     [firstPart + 'javascript']: 'result',
// }
// console.log(userInfo['likesjavascript']);

// let firstPart1 = 'likes';
// let userInfo1 = {
//     name: 'Вася',
//     age: 30,
//     [firstPart1]: true,
// }
// console.log(userInfo1[firstPart1]);

// Вложеность

// let userInfo = {
//     name: 'Andrey',
//     age: 29,
//     adress: {
//         city: 'Izhevsk',
//         street: 'Freedom',
//     }
// };

// console.log(userInfo);
// console.log(userInfo.adress);
// console.log(userInfo.adress.city);

// Свойство из переменной

// function makeUserInfo (name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }
// let user = makeUserInfo('Andrey', '29');
// console.log(user);

// Изменение объекта, добавление свойств

// let userInfo = {
//     name: 'Andrey',
// }
// // console.log(userInfo);
// userInfo.age = 29;
// // console.log(userInfo);
// userInfo['likes javascript'] = true;
// // console.log(userInfo);
// userInfo.adress = {
//     city: 'Izhevsk',
//     street: 'Freedom',
// };
// // console.log(userInfo);
// delete userInfo['likes javascript'];
// // console.log(userInfo);

// let user = userInfo;
// console.log(user);

// Дублирование объекта Object.assign
// Object.assgn (Куда(объект), что(свойство1), (свойство2) и т.д)

// let userName = {
//     name: 'Andrey',
//     age: 20
// }

// let user = Object.assign({}, userName);
// user.age = 18;

// Object.assign(userName, {street: 'Freedom', number: 20})

// console.log(userName);

// Проверка существования свойства

// let userInfo = {
//     name: 'ANdrey',
//     age: 29,
// }

// if (userInfo.age) {
//     console.log(userInfo.age);
// }

// Опциональная цепочка

// let userInfo1 = {
//     name: 'ANdrey',
//     age: 29,
//     adress: {
//         city: 'Moscow',
//         street: 'Putin',
//     }
// }
// console.log(userInfo1?.adress?.street);

// Оператор in

// let userInfo2 = {
//     name: 'ANdrey',
//     age: 29,
//     adress: {
//         city: 'Moscow',
//         street: 'Putin',
//     }
// }

// if ('name' in userInfo2) {
//     console.log(userInfo2.name);
// }

// Цикл for..in Для перебора всех свойств объекта используется данный цикл. 

// let userInfo3 = {
//     name: 'Andrey',
//     age: 29,
//     adress: {
//         city: 'Moscow',
//         street: 'Putin',
//     }
// }

// for (let key in userInfo3) {
//     console.log(key);
//     console.log(userInfo3[key]);
// }

// Функция конструктор

// function UserInfo (name, age) {
//     this.name = name;
//     this.age = age;

// }

// console.log(new UserInfo('Andrey', 29));

// Задача с видео 
const userInfo = {
    name: 'Вася',
    age: 30,
}
userInfo.name = 'Лена';
delete userInfo.name;