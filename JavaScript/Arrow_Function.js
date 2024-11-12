
let fn= () =>{
    console.log('hi');
}

fn();

let sum= (a,b) =>{
    return a+b;
}

console.log(sum(2,5));

let sum2= (a,b) => (a+b);
console.log(sum2(2,5));

let arr=[10,20,30,50];

let double= arr.map((item) => item*2);
console.log(double);
