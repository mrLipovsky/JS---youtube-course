//variables
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

// Objects
let girl = {
    name: 'Emily',
    age: 23,
    eyeColor: 'brown'
};
girl.name = 'Peter';
girl['name'] = 'Sam';
console.log(girl);

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
let a = 0;
do{
    console.log('number is ' + a);
    a++;
}
while(a<6)

// For loop
let b;
for(let b = 0; b < 7; b++){
    console.log('number is ' + a);
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