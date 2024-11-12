
// Example-1(Scope)

// let score=50;  //Script Scope in GEC
// if(score>33){
//     let x=20;  // x takes memory in Block Scope but no EC will be formed
// }
// console.log(x); 
// Error: x is not defined here as scope of x is inside block only and we are accessing it outsidse its scope

// Example-2

let x=10;
{
    let x=20;
    console.log(x);// 20 as x is in the block scope
}
console.log(x); // 10 as 10 is in the script scope and block scope has been destroyed before this

//Example-3

var a=10; // a is formed in the Global Scope
    {
        var a=20;  //no new Scope is formed as var has global scpope so value of a is changed from 10 to 20 in global scope itself
        console.log(a);  //20
    }

console.log(a);  //20

// Example-4

var y=100;  // this y is formed in Global scope

function fun(){
    var y=50;  // this y is formed in Local scope as var has local/functional scope in EC
    console.log(y); //50 
}

fun();  // new Ec will be formed as it is a function  
console.log(y); // 100 as local scope would have been destroyed after the execution of the function



// Hoisting

console.log(p); // undefined as till now CEP has not done
console.log(q); //Reference Error
console.log(r);  //Reference Error

//Reference Error in case of q and r as in case of let and const dead Tempora zone (DTZ) does not allow to use variable before its initialization

var p=10;
let q=100;
const r=20;






