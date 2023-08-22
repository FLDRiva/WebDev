//ЦИКЛ WHILE

// while (Условие) {
//     // Тело цикла
// }

// let num = 5;
// while (num) {
//     console.log(num);
//     num--;
// }

// ЕСЛИ УСЛОВИЕ ОДНО, МОЖНО УПРОСТИТЬ ЗАПИСЬ -
// let num = 5;
// while (num) console.log(num--);

//КОНСТРУКЦИЯ DO...WHILE
// let num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num < 5);

// -----------------------------------------
// ЦИКЛ FOR for (Начало; Условие; Шаг)
// for (let num = 0; num < 5; num++) {
//     console.log(num);
// }

// BREAK
// let num = 0;
// for (; num < 5; num++) {
//     console.log(num);
//     if (num == 2) break;
// }
// console.log(`Работа окончена, num = ${num}`);

// CONTINUE
// let num = 0;
// for (; num < 5; num++) {
//     if (num == 2) continue;
//     console.log(num);
// }

// МЕТКИ
// firstFor: for (let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size == 2) {
//             break firstFor
//         }
//         console.log(size);
//     }
// }

// -----------------------------------------
// ДОМАШКА

// Задача 1 - Вывести в консоль числа от 1 до 5
// let num = 1;
// while (num < 6) console.log(num++);

// Задача 3 - переписать на while 
// let num = 0;
// while (num < 3) console.log(`Число ${num++}`);

// Задача 4 - Прекратить работу цикла №1 когда size равна 1
firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 1) {
            break firstFor
        }
        console.log(size);
    }
}
    

