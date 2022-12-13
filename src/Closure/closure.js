
function Greeting (){
    let userName = 'VicentC0de';

    function DisplayUserName(){
        return `Hello ${userName}`;
    }

    return DisplayUserName;
}

const greeting = Greeting();
console.log(greeting);
console.log(greeting());