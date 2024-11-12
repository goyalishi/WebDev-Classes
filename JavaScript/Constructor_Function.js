//Constructor

// function user(){
//     this.username='goyalishi'
//     this.email='goyalishika2004@gmail.com'
// }

// let user1=new user();
// console.log(user1);


function User(userid,mailid){
    this.username=userid
    this.email=mailid
}

User.prototype.description=function(){
    return `my name is ${this.username}`
}

//Rather than defining the description function in the User function we can define it int its prototype that is in User.protoptype as this decription function will be same for every object so we can store it here

let user1=new User('ishikagoyal','goyalishika2004@gmail.com');
let user2=new User('bhavanagoyal','bhavanagoyal120@gmail.com')
console.log(user1);
console.log(user1.description())
console.log(user2)