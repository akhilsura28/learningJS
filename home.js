//console.log('hello');
//alert('This is wondor')

var b = 'smoothie';
console.log(b);

var someNumber = 66;
console.log(someNumber);

//document.getElementById('someText').innerHTML = 'Hey There';

/*
var age = prompt("what's your age?");

document.getElementById('someText').innerHTML = age;
*/

//Numbers in Javascript

var num1 = 5.89;
var num2 = 43;

//console.log(num1*num2);
//console.log(50 / 5);

//num1++;
//num1--;

//console.log(num1);

/*
console.log(num1 % 5);  //0.899997
console.log(num1 / 5);  //1.178
console.log(num1 % 6);  //5.89
console.log(num1 / 6);  //0.982
*/

/*
console.log(num1++);    // 5.89
console.log(++num1);    // 7.89
*/


var k = 10;
k += 20;
console.log(k);  // 30

/* Functions
1. Create a function 
2. Call the function


//create
function fun() {
    alert('this is a function');
}

//call
fun();

*/


/* Lets craete a function that takes in a name and says
hello followed by your name : */

function greeting() {
    var naming = prompt("what's your name ?");
    // var result = 'hello ' + name;
        var result = `hello ${naming}`;
   // document.getElementById('someText').innerHTML = result;
    console.log(result);
}

//greeting();


// How do arguments work in fuctions?
// How do we add 2 numbers together in a function

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

//sumNumbers(23.3, 40);  63.3 
//sumNumbers('hello ','Akhil'); hello Akhil 
//sumNumbers('20',10);  2010

//Best way 
function greeting(yourName) {
    var result = `Hello ${yourName}`;
    console.log(result);
}

//var name2 = prompt('What is your name ??');
//greeting(name2);



/*While loops

var num = 0;
while (num < 20){

    num += 1;
    console.log(num);
}

*/

/*For loops

for(let i = 0; i < 20; i++){
    console.log(i);
}

*/



//Data Types

let yourAge = 18; // number 
let yourName = 'Bobby'; // string
let name = {first : 'Patrick', last : 'Jane'}; //object
let truth = false; //boolean
let groceries = ['apple','banana','oranges']; //array
let random ; //undefined
let nothing = null; // value null


//Strings in JavaScript (common  methods)
//let fruit = 'banana';
let fruit = 'banana,apple,oranges,blackberry';
let moreFruits = 'banana\napple';   // new line

console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('n'));
console.log(fruit.indexOf('q'));
console.log(fruit.indexOf('nan'));
console.log(name.first);
console.log(fruit.bold());
console.log(fruit.slice(3,5));
console.log(fruit.replace('ban',123));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(5));
console.log(fruit[5]);
console.log(fruit.split(','));
console.log(fruit.split('a'));


//Array
let fruitsFirstWay = ['banana','apples','orange','pineapples'];
//or
let fruitsSecondWay = new Array('banana','apples','orange','pineapples');

console.log(fruitsFirstWay[2]);
console.log(fruitsSecondWay[3]);

fruitsFirstWay[0] = 'pear';
console.log(fruitsFirstWay);

for(let i = 0; i < fruitsSecondWay.length; i++){
    console.log(fruitsSecondWay[i]);
}


//Array common methods
console.log('to string', fruitsFirstWay.toString());
console.log(fruitsFirstWay.join('--'));
console.log(fruitsFirstWay.join(' * '));

console.log(fruitsFirstWay.pop(), fruitsFirstWay);  //removes last element
console.log(fruitsFirstWay.push('Custard'), fruitsFirstWay); // appends

fruitsFirstWay.shift(); //remove first element from a list
console.log(fruitsFirstWay);
fruitsFirstWay.unshift('kiwi');
console.log(fruitsFirstWay);

let vegetables = ['tomato','potato','spinach'];
let allGroceries = fruitsFirstWay.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.reverse());
console.log(allGroceries.sort());       //sorts alphabetically


let someNumbers = [5, 10, 2, 56, 4, 255, 54, 321, 8];

let sortedArray = someNumbers.sort(function(a, b) {return b-a});  //sorted in descending order
console.log(sortedArray);

sortedArray = console.log(someNumbers.sort(function(a, b) {return a-b}));  //sorted in ascending order
console.log(sortedArray);


let emptyArray = []; // or let emptyArray = new Array();
for(let num = 0; num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);



// Objects in JavaScript
// dictionaries in Python

let student = {
    first: 'Akhil',
    last: 'Sura',
    age: 25,
    height: 170,

    studentInfo: function () {
        return ` ${this.first } ${this.last}\n ${this.age}\n ${this.height}`;
    }

};

//console.log(student.last); 
//console.log(student.first); 

//student.first = 'Vamshi'; //change value
//console.log(student.first)
//student.age++;
//console.log(student.age);
console.log(student.studentInfo());


/*
// Conditionals, Control flows (if else)
var age = prompt('what is your age??'); //for prompt use 'var' instead of 'let' 

if((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
}else {
    status = 'not my target audience';
    console.log(status);
}

*/


// Switch statements
/* differentiate between weekday vs. weekend
day 0 --> Sunday --> weekend
day 1 --> Monday --> weekday
day 2 --> Tuesday --> weekday
day 3 --> Wednesday --> weekday
day 4 --> Thursday --> weekday
day 5 --> Friday --> weekday
day 6 --> Saturday --> weekend
*/

switch(2){
    case 0:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;
    default:
        text = 'Weekday';

}

console.log(text);



