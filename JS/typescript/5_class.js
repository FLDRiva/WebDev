var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        // name + 'Typescript version is ' + this.version
        return "[".concat(name, "]: Typescript version is ").concat(this.version);
    };
    return Typescript;
}());
// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
//----------------------------------------------
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = ' black';
    }
    Animal.prototype.go = function () {
        console.log('GO');
    };
    Animal.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Animal;
}());
// class Cat extends Animal {
//     public setVoice(voice: string): void {
//         this.voice = voice
//     }
// }
// const cat = new Cat()
var animal = new Animal();
// cat.setVoice('test')
console.log(animal.color);
// console.log(cat.color)
// console.log(cat.voice)
//----------------------------------------------
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var appComponent = /** @class */ (function (_super) {
    __extends(appComponent, _super);
    function appComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    appComponent.prototype.render = function () {
        console.log('Component on render');
    };
    appComponent.prototype.info = function () {
        return 'This is info';
    };
    return appComponent;
}(Component));
