//Tambien llamado local scope
function Greeting(){
    let userName = "Ana";
    console.log(userName);

    if (userName === "Ana"){
        console.log(`Hello ${userName}`);
    }
}

Greeting();
console.log(userName);