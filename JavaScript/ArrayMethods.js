
// 1. foreach(fn(iterator)) - Accepts a callback function which accepts an iterator to iterate on each elememt of the given array and perform the specified function

// let arr=['sam','ishi','goyal'];

// arr.forEach(function print(item){
//     console.log(item);
// });

// arr.forEach(function print(item,index){
//     console.log(`${index} --> ${item}`);
// });

// 2. map()-accepts a callback function and return an array

// let mrks=[10,23,56,40];

// let newMrks=mrks.map(function(item){
//     return item*2;
// });

// console.log(newMrks);

// 3. filter()

// let mrk=[78,56,70,69,52,59,67,90,95];
// let arr=mrk.filter(function(i){
//     if(i>=60) return true;
//     else return false;
// })

// console.log(arr);


//4. sort()

// let array=[16,80,60,89,4,2,21,23,67,18];
// let newArr=array.sort(); // sorts above array lexographically which does not necessarily in the ascneding order

// let arr2=array.sort(function(a,b){
//     return a-b; //asc
// });
// console.log(arr2);

// Example of filter()

// let menu=['paneerBm','pizza','chicken 2 pyaza','dal','palak paneer','Chicken biriyani','mix veg','egg burji','soda','noodles','manchuriyan','chole Chawal']

// function isVeg(food){
//     if((food.toLowerCase().indexOf('chicken')!=-1) || (food.toLowerCase().indexOf('egg')!=-1))
//         return false;
//     return true;
// }

// let vegMenu=menu.filter(isVeg);
// console.log(vegMenu);

// Chaining

// const nums=[1,2,3,4,5,6]

// const newNums=nums
//                 .map( (num)=> num*10)
//                 .map( (num) => num+1)
//                 .filter( (num) => num>=40)

// console.log(newNums);

// 5. reduce()

const myNums=[1,2,3,4];

//Acc value is initially given 0 and ir every time changes according to result
const myTot=myNums.reduce( function( acc,currVal){
    console.log(`acc:${acc} and currVal:${currVal}`);
    
    return acc+currVal;
},0)

//Another way of writing
const myTotal=myNums.reduce( (acc,curr) => acc+curr,0)

console.log(myTotal);


// --------------General Methods----------------

// let arr1=['ishika'];
// let arr2=['kanha']

// // arr1.push(arr2);
// console.log(arr1);

// let newArr=arr1.concat(arr2);
// console.log(newArr);

// //Spread Operator
// const mergedArr=[...arr1,...arr2];
// console.log(mergedArr);

//flatten array
// const fuzzyArr=[1,2,3,[4,5],[7,8,[4,0,9],0],90,76]
// const simpleArr=fuzzyArr.flat(Infinity);
// console.log(simpleArr);


// console.log(Array.isArray("Ishika"));
// console.log(Array.from("Ishika"));
// console.log(Array.of(100,200,500));





