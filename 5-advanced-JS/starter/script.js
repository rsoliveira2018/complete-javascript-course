
// ------------- Object Literal -------------
/*
var john = {
    name: 'John',
    yearOfBirth: 1992,
    job: 'analyst'
};
*/
// ---------- Function Constructor ----------
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// ------- Adding Method to Prototype -------
Person.prototype.calculateAge = function(){
        console.log(2020 - this.yearOfBirth);
    };
Person.prototype.lastName = 'Oliveira';

var erika = new Person('Erika', 1993, 'Analyst');
var rafael = new Person('Rafael', 1992, 'Developer');
var joana = new Person('Joana', 2019, 'Scratcher');

erika.calculateAge();
rafael.calculateAge();
joana.calculateAge();

console.log(erika.lastName);
console.log(rafael.lastName);
console.log(joana.lastName);

erika.lastName = 'Duarte';

console.log(erika.lastName);
console.log(rafael.lastName);
console.log(joana.lastName);
*/

// ---------- Object Creator ----------
/*
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1992;
john.job = 'Analyst';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'Teacher' }
});
*/

// ---------- Primitives vs Objects ---------- //

// Primitives: strings, numbers, booleans, undefined, null
// Objects: everything else

// ---------- First-Class Functions / Call-Back Functions ---------- //
/*
var years = [1990, 2010, 2015, 1955, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHR(el) {
    if (el >= 18 && el <= 81)
        return Math.round(206.9 - (0.67 * el));
    else
        return -1;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHR);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

// ---------- Function Returning Functions ---------- //
/*
function interviewQuestion(job) {
    if (job === 'designer'){
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello, ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
*/

// ----------- Immediately Invoked Function Expressions (IIFE) ----------- //
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= (5 - goodLuck));
})(3);
*/


// ==================== CLOSURES ==================== //
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1992);

var retirementGermany = retirement(65);
retirementGermany(1992);

var retirementIceland = retirement(67);
retirementIceland(1992);
*/

// ---------------- Bind, Call and Apply ---------------- //
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeofDay) {
        if(style === 'formal'){
            console.log('Good ' + timeofDay + ', ladies and gentlemen. I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeofDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
    
}

john.presentation('formal', 'evening');
john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['formal', 'morning']);

var johnFriendly = john.presentation.bind(john, 'friendly');
var emilyFormal = john.presentation.bind(emily, 'formal');

johnFriendly('night')
emilyFormal('dawn');
*/






































































