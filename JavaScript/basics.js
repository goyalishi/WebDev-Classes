//4 digit OTP using random fuction of Math

let otp="";
let d1=Math.floor(10*Math.random());
let d2=Math.floor(10*Math.random());
let d3=Math.floor(10*Math.random());
let d4=Math.floor(10*Math.random());
otp=` ${d1} ${d2} ${d3} ${d4}`;
console.log(otp);

//Array Methods

arr=["https","google","com"];
console.log(arr.join('/'));

// Objects and this

let obj={
    naam:'Ishika', //property-1
    age:'19', //property-2
    print: function(){   // Method
        return (`${this.naam} is ${this.age} years old`)
    }
}

console.log(obj.print());


// falsy values

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [],{},function(){}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10
// val1=null?? 10
val1=undefined ?? 15

console.log(val1);
