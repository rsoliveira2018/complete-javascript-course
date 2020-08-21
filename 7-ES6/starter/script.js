
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong, please try again!');

question.delete(4);
if(question.has(3)){
    question.delete(3);
}

//question.clear();

//question.forEach((value, key) => console.log(`Value: ${value}`));

for (let [key, value] of question.entries()){
    if (typeof(key) === 'number'){
        console.log(key + ' ' + value);
    }
}
*/

//// ==== ES5 CLASSES (FUNCTION CONSTRUCTORS) AND INHERITANCE ==== ////

var Person = function (firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
//    this.getAge = function () {
//        return new Date().getFullYear() - this.birthYear;
//    }
}
Person.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
}

var Athlete = function (firstName, lastName, birthYear, weight, height) {
    Person.call(this, firstName, lastName, birthYear);
    this.weight = weight;
    this.height = height;
    this.getImc = function () {
        return (weight / (height/100 * height/100));
    }
}

Athlete.prototype = Object.create(Person.prototype);

Athlete.prototype.wonMedal = function () {
    return 10;
}

//// ==== ES6 CLASSES AND INHERITANCE ==== ////

class Person6 {
    constructor (firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    
    calculateAge() {
        return new Date().getFullYear() - this.birthYear;
    }
}

class Athlete6 extends Person6 {
    constructor (firstName, lastName, birthYear, weight, height) {
        super(firstName, lastName, birthYear);
        this.weight = weight;
        this.height = height;
    }
    
    calculateImc() {
        return (this.weight / (this.height/100 * this.height/100));
    }
}

class Cyclist6 extends Athlete6 {
    constructor(firstName, lastName, birthYear, weight, height, style, sport) {
        super (firstName, lastName, birthYear);
        this.weight = weight;
        this.height = height;
        this.style = style;
        this.sport = sport;
    }
    
    calculateMaxPower() {
        switch(this.style){
            case 'sprint':
                return (this.weight * this.height/100) * 9.99;
                break;
            case 'climb':
                return (this.weight * this.height/100) * 9.93;
                break;
            case 'all-around':
                return (this.weight * this.height/100) * 9.96;
                break;
            case 'long-distance':
                return (this.weight * this.height/100) * 9.90;
                break;
            default:
                return -1;
                
        }
    }
}

var peterSagan = new Cyclist6 ('Peter', 'Sagan', 1985, 80, 185, 'sprint', 'road');
var eganBernal = new Cyclist6 ('Egan', 'Bernal', 1995, 60, 175, 'climb', 'road');













