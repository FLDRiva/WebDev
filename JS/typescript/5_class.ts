class Typescript {
    version: string
    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        // name + 'Typescript version is ' + this.version
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

//----------------------------------------------

class Animal {
    protected voice: string = ''
    public color: string = ' black'

    private go() {
        console.log('GO');   
    }

    private test: string = '';

    setTest(voice: string) {
        this.test = voice;
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
const animal = new Animal()
// cat.setVoice('test')
console.log(animal.color)
// console.log(cat.color)
// console.log(cat.voice)

//----------------------------------------------

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class appComponent extends Component {
    render(): void {
        console.log('Component on render');
        
    }

    info(): string {
        return 'This is info'
    }
}