const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['a', 'b', 'c', 'd', 'e']

//GENERIC Type (Т), КОТОРЫЙ САМ ПОДСТРАИВАЕТСЯ ПОД ОПРЕДЕЛЕННЫЙ МАСИВ
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)