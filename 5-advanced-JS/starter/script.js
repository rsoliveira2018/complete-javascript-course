
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



































