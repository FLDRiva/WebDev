 console.log(true);
 console.log(false);

 console.log(5 === 5);
 console.log(5 === 6);

 console.log(Boolean(5));

 // False values 

 console.log(Boolean(undefined));
 console.log(Boolean(null));
 console.log(Boolean(0));
 console.log(Boolean(NaN));
 console.log(Boolean(''));

 let s = 'Text';

 if (s) {
    console.log('Its true');
 }

console.log(true && false);
console.log(true && true);
console.log(true || false);
console.log(!false);

let a = 0,
   isTrue = true;
isTrue && (a = 5);
console.log(a);

let someString = 'Non-empty string';
let newString = someString || 'Default String';
console.log(newString);
