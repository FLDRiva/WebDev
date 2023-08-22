const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['a', 'b', 'c', 'd', 'e']

//GENERIC Type (Т), КОТОРЫЙ САМ ПОДСТРАИВАЕТСЯ ПОД ОПРЕДЕЛЕННЫЙ МАСИВ
function reverse<T>(data: T[]): T[] {
    return data;
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)