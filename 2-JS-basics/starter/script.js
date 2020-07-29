// ---------- The Ternary Operator and Switch Statements ---------- //
/*
var firstName = 'John';
var age = 24;
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);

// Switch statement
var job = 'analyst';
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches coding');
        break;
    case 'driver':
        console.log(firstName + ' drives a bus');
        break;
    case 'analyst':
        console.log(firstName + ' studies javascript');
        break;
    default:
        console.log(firstName + ' does something still undisclosed.')
}
*/

// TRUTHY and FALSY values on JavaScript

// --> Falsy values: undefined, null, 0, '', NaN
// --> Truthy values: all the remaining values
/*
var height;

height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
}else{
    console.log('Variable has NOT been defined');
}

// Equality Operators
if(height === '23'){
    console.log('The == operator does type coercion!');
} else{
    console.log('The === operator does NOT do type coercion!');
}
*/



// -------------------- FUNCTIONS -------------------- //
/*

function calculateAge(currentYear, birthYear) {
    return currentYear - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
    var retiringAge = 65;
    return retiringAge - calculateAge(2020, 1992);
}

//console.log('Rafael will be retired within ' + yearsUntilRetirement(2020, 1992) + ' years.');

// ----------------- Function expressions

var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teacher javascript coding.';
        case 'driver':
            return firstName + ' driver a minivan.';
        case 'analyst':
            return firstName + ' analyzes stuff.';
        default:
            return firstName + ' does something obscure.';
            
    }
}

var retorno = whatDoYouDo('whore', 'Sharon');
console.log(retorno);
*/

// -------------------- ARRAYS -------------------- //
/*
var names = ['John', 'Mary', 'Anna'];
var years = new Array(1990, 1968, 2002);
console.log(names);

names[names.length] = 'Mark';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push(1990);
john.unshift(1990);

//john.pop();
//john.shift();

console.log(john);
console.log(john.indexOf(1990));
*/

// -------------------- OBJECTS -------------------- //
/*
var john = {
    firstName: 'Rafael',
    lastName: 'Oliveira',
    birthYear: 1992,
    family: ['Zelia', 'Sebastiao', 'Erika', 'Mariana', 'Joana'],
    job: 'analyst',
    isMarried: true,
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
}

john.calcAge();
console.log(john.age);
*/

// -------------------- LOOPS / ITERATIONS -------------------- //
/*
for (var i = 0; i < 10; i++){
    console.log(i);
}

var x = 0;
while (x < 10){
    console.log(x);
    x++;
}
*/
































































































































