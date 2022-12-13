var a;
var b = 'b';
b = 'bb';
var a = 'aa';

//Global Scope
var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function Countries(){
    country = 'Mexico'; //Global
    console.log(country);
}

Countries();
console.log(country);