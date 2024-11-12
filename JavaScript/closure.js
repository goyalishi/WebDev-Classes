
function someFunc(){
    let username='einstein'
    function printName(){
        console.log(username)
    }
    return printName;
}

let returnValue=someFunc() // return value holds the entire printValue function 

returnValue();  //though username variable is not present in the printValue function but we can access its value becoz of closure

//Example

function counter(){
    let count=0;

    return {  //returning an object
        getCount:function(){
            return count;
        },
        increment:function(){
            count+=1;
        },
        decrement:function(){
            count-=1;
        },
        reset:function(){
            count=0; 
        }
    };
}

let counter1=counter();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
counter1.decrement();
console.log(counter1.getCount());
counter1.reset();
console.log(counter1.getCount());
