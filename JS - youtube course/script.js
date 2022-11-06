//variables
var a;  
var A; // neviem co to je??
var danielPeter;

var a; 
a = 10;
var b = 20;
var sum = a + b;
console.log(sum);


// var a, b, sum;
// a = 20;
// b = 10;
// sum = a + b;

/////

let nameOne = 'peter';
console.log(nameOne);

// can change
let ageTwo = 23;
ageTwo = 21;
console.log(ageTwo);

// can NOT change
const ageOne = 22;
// ageOne = 21;
console.log(ageOne);

let name = 'Peter'; //string
let age = 36; //number
let isApproved = true; //boolean
let firstName = undefined; //undefined variable 
let date = null; //null object 

// VAR LET CONST
// beter use let const, pretoze tu nemozeme menit premennu

// ok
if (true) {
    var varVariable = 'this is True'
}

console.log(varVariable)

// error 
// if (true) {
//     let letVariable = 'this is True'
// }
// console.log(letVariable)

// error 
// if (true) {
//     const constVariable = 'this is True'
// }
// console.log(constVariable)


// Objects
let girl = {
    name: 'Emily',
    age: 23,
    eyeColor: 'brown'
};
girl.name = 'Peter';
girl['name'] = 'Sam';
console.log(girl);

let nameFour = 'Peter';
console.log(nameFour.length);

let updateAge = function(age) {
    return ++age;
}

let person = new Object();

person.name = 'Peter';
person.eyeColor = 'Blue';
person.age = 36;
person.updateAge = function() {
    return ++person.age;
}
console.log(person.age);
person.updateAge();
console.log(person.age);

console.log(person.name);

let personOne = {
    name: "Daniel",
    eyeColor: "Blue",
    age: 27,
    updateAge: function(){
        return ++person.age;
    }
}
console.log(personOne);

// Arrays 
let items = ['color', 'paintbrush', 'plate'];
items[3] = 'sprays';
items.push('new item');
console.log(items);

// Functions
function view(name) {
    console.log("Welcome to Peter's code." + ' ' + name);
}
view('He is the best');

function square(number) {
    return number*number;
}
let number = square(2);
console.log(number);

// Conditional statemen 
let numberOne = [];
numberOne = [1,4,1,2,5,2];

if(numberOne[0]==numberOne[3]){
    console.log('Yes')
} else {
    console.log('No')
}

// While loop
let i = 0;
while (i < 5){
    console.log('number is ' + i);
    i++;
}

// Do ...while loop
let ab = 0;
do{
    console.log('number is ' + ab);
    ab++;
}
while(ab<6)

// For loop
let ba;
for(let ba = 0; ba < 7; ba++){
    console.log('number is ' + ba);
}

// Switch statemen 

let game='cricket';
switch(game){
    case 'footbal':
        console.log('I do not want to watch footbal');
    break;
    case 'hokey':
        console.log('I do not want to watch hokey');
    break;
    case 'cricket':
        console.log('I love cricket');
    break;
    default:
        console.log('Match not found');
}