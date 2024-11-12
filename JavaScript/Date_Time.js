
let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2024,9,8);
// let myCreatedDate=new Date(2024,9,8,5,20);
// console.log(myCreatedDate.toString());

// let date2=new Date("2024-10-08");
let date3=new Date("08-10-2024");
// console.log(date2);
// console.log(date3.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(date3.getTime());
// console.log(Math.floor(Date.now()/1000));  //converting into seconds

let newDate=new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());


// newDate.toLocaleString('defaul',{
//     weekday:"long"
// })
console.log(newDate.toLocaleString('defaul',{
    weekday:"long"
}));




