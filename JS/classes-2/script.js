const user = {
    firstName: '',
    lastName: '',
    mob: '',
    dob: '',
    yob: '',
    setName: function (name) {
        const nameRow = name.split(' ');
        this.firstName = nameRow[0];
        this.lastName = nameRow[1];
    },
    getName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    getAge: function () {

    },

};

class User {
    constructor(props) {
        this.name = props.name;
        this.dateOfDirth = props.dob;
    }

    firstName ='';
    lastName = '';
    mob = '';
    dob = '';
    yob = '';

    set name(newName) {
        const nameRow = newName.split(' ');
        this.firstName = nameRow[0];
        this.lastName = nameRow[1];
    }

    get name() {
        return `${this.firstName} ${this.lastName}`;
    }

    get age() {
        return new Date().getFullYear() - this.yob
    }

    set dateOfDirth(date) {
        const dateRow = date.split('-');
        this.dob = Number(dateRow[0]);
        this.mob = Number(dateRow[1]);
        this.yob = Number(dateRow[2]);
    }

    get dateofDirth() {
        return `${this.dob}-${this.mob}-${this.yob}`;
    }
}

const Andrey = new User({
    name: 'Andrey Revin',
    dob: '12-05-1994',
});

console.dir(Andrey.age);