// let promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let data='hi doston ye promise hai';
//         resolve(data);
//         // let err='oops error aagya';
//         // reject(err);

//     },3000);
// });

// promise.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })


//Example-2
// .then() chaining causes problem(vertical growth of code)

// let p1=new Promise((resolve,reject)=>{
//     console.log('Wait for 3 second to start' );
//     setTimeout(()=>{
//         resolve();
//         //reject();

//     },3000);
// });

// p1.then( () =>{
//     return new Promise((resolve,reject) =>{
//         console.log('pehle promise poora hua');
//         setTimeout(()=>{
//             console.log('2 sec lag gye bhaisahab');
//             resolve();
//         },2000);
//     })
// }).then( ()=>{
//     console.log('dono promise poore hue');
// })


// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"hitesh",psswrd:"123"})
//         }
//         else{
//             reject('ERROR:Something went wrong');
//         }
//     },2000);
// })

// promiseThree.then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) =>{
//     console.log(username);
// })
// .catch(()=>{
//     console.log('Error hai re bhaiya');
// })
// .finally( ()=>{
//     console.log('Either error resolved or occurred');
// })

//Another way of writing the above code
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hitesh",psswrd:"123"})
        }
        else{
            reject('ERROR:Something went wrong');
        }
    },2000);
})

async function consumePromiseFour(){
    try{
        const response= await promiseFour
        console.log(response);
    } catch (error){
        console.log(error);
    }
    
}

consumePromiseFour();