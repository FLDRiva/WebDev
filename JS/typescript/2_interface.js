var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '34534',
    size: {
        width: 50,
        height: 70
    }
};
rect2.color = 'black';
// СТРОГОЕ ПРИВЕДЕНИЕ К ТИПУ
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '12324',
    size: {
        width: 30,
        height: 30
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
