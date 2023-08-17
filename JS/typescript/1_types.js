var isFetching = true;
var Loading = false;
var int = 42;
var float = 4.2;
var message = 'Hello TS';
// Указываем что это численный массив
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13]; // ДЖЕНЕРИК ТИП
//СТРОКОВЫЙ МАССИВ
var words = ['Hello', 'TS'];
//МАССИВ ИЗ РАЗНЫХ ТИПОВ ДАННЫХ Tuple
var contact = ['Andrey', 43534534];
// ТИП ДАННЫХ Any
var variable = 42;
variable = 'New String';
function sayMyName(name) {
    console.log(name);
}
sayMyName('Andrey');
//ТИП Never - КОГДА КОМПИЛЯТОР ВИДЕТ, ЧТО ТОЧНО БУДЕТ ВЫБРОШЕННА ОШИБКА ИЛИ ФУНКЦИЯ БЕСКОНЕЧНА
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
