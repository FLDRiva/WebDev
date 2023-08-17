const isFetching: boolean = true
const Loading: boolean = false

const int: number = 42
const float: number = 4.2

const message: string = 'Hello TS'

// Указываем что это численный массив
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // ДЖЕНЕРИК ТИП

//СТРОКОВЫЙ МАССИВ
const words: string[] = ['Hello', 'TS']

//МАССИВ ИЗ РАЗНЫХ ТИПОВ ДАННЫХ Tuple
const contact: [string, number] = ['Andrey', 43534534]

// ТИП ДАННЫХ Any
let variable: any = 42
variable = 'New String'

function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Andrey')

//ТИП Never - КОГДА КОМПИЛЯТОР ВИДЕТ, ЧТО ТОЧНО БУДЕТ ВЫБРОШЕННА ОШИБКА ИЛИ ФУНКЦИЯ БЕСКОНЕЧНА
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

// Type - СОЗДАНИЕ СВОИХ ТИПОВ ALIES
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1 = 1234
const id2 = '1234'

type SomeType = string | null | undefined