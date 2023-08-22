// let a = 16;

// if (a > 9) {
//     console.log('yes');
// } else {
//     console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = function() {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('WELCOME!!!');
    } else if (num > 60) {
        console.log('Ты точно сюда?');   
    } 
    else {
        console.log('Ты не пройдешь!'); 
    }

    switch (num) {
        case 15:
            console.log('Еще год потерпи');
            break;
        case 16:
            console.log('Можно');
            break;
        default:
            console.log('ooook');
            
    }
}