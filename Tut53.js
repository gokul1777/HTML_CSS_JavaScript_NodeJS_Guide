console.log("This is tutorial 53");

function greet(name, greettext="Greetings from JavaScript"){
    console.log(greettext + " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This line will never ececute (Unreachable Code)
    // console.log("Function is returned");
}

let name = "Gokul ";
let name1 = "Amit ";
let name2 = "Daksh ";
let name3 = "Piyush ";
let greettext = "Good Morning";
greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3);
// let returnval= greet(name3);
// console.log(returnval1);

let returnval = sum(1,2,3);
console.log(returnval)
// console.log(name  + "is a good boy");
// console.log(name1  + "is a good boy");
// console.log(name2  + "is a good boy");
// console.log(name3  + "is a good boy");