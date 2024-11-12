
// async function some(){
//     await new Promise( (resolve,reject)=>{
//         setTimeout( ()=>{
//             console.log('3 sec hogye');
//             resolve();
//         },3000);
//     })

//     await new Promise( (resolve,reject)=>{
//         setTimeout( ()=>{
//             console.log('2 sec hogye');
//             resolve();
//         },2000);
//     })

//     console.log('dono promise poore hue');
// };

// some();

// Example-1 

// async function getAllUsers() {
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users');
//         const data= await response.json();
//         console.log(data);
        
//     }
//     catch(error){
//         console.log('E:',error );
        
//     }
// }

// getAllUsers();

//alternate way of writing

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then( (data) =>{
    console.log(data);
})
.catch((error) => console.log(error))