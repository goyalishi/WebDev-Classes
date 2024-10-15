
//Using Symbol as a key in an object

const mySym=Symbol("key1");

// Object Literal(Non-Singleton)
const JsUser={
    name:"Ishika",
    [mySym]:"mykey1",
    age:19,
    isFemale:true,
    email:"ishika@gmail.com"
}

console.log(JsUser[mySym]);
// console.log(JsUser.mySym); //Wrong way to get symbol

// to freeze object to lock the attribute
// JsUser.email="goyal@gmail.com"  //before freeze it gets changed
// Object.freeze(JsUser);
// JsUser.email="ishi123@gmail.com" //after freeze it will not change
// console.log(JsUser.email);


// Constuctor Object (Singleton ie single of its type)
// const user=new Object();

// const obj1={1:"a",2:"b"}
// const obj2={4:"l"}

// finalObj=Object.assign({},obj1,obj2)
// console.log(finalObj);

// //Spread Operator
// const obj3={...obj1,...obj2}
// console.log(obj3);

console.log(JsUser);
console.log(Object.keys(JsUser)); //return array conatining keys
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser));

console.log(JsUser.hasOwnProperty('email'));
