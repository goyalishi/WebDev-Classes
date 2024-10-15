// 1. for loop

// for(let i=0;i<6;i++){
//     for(let j=0;j<6;j++){
//         if(i==j){
//             break;
//         }
//         console.log(i+" "+j);
//     }
// }

//2. while loop

// let num=100;
// while(num>=0){
//     console.log(num+" ");
//     num=num-10;
// }

// 3. for-in(objects)

// let object={
//     name:'ishika',
//     age:19,
//     gender:'female',
//     branch: 'computer Science'
// }

// for(let item in object){
//     console.log(`${item} --> ${object[item]}`);
// }


// 4. for-of(for arrays,maps,lists,vectors etc)

// let arr=['ishi','kanha','radha'];

// for(let item of arr){
//     console.log(item);
// }


// 5.) do-while 

// let i=1;
// do{
//     console.log(`hi ${i}`);
//     i+=1;
// }while(i<6);

// ----------------Some other loops------------

//maps

const map=new Map();
map.set("a","apple");
map.set("b","ball");
map.set("c","cat");
map.set("d","dog");

// console.log(map);

// for(const key of map){
//     console.log(key);
    
// }

for(const [key,val] of map){
    console.log(key,"->" ,val);
    
}

ob={'a':1,'b':2};
for (const element in ob) {
    console.log(element);
    
}

