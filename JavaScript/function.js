// Grade Calculator

function calculateGrade(mrks){
    let totMrks=0;
    for(let mark of mrks){
        totMrks+=mark;
    }

    let grade=totMrks/5;
    console.log(grade);

    if(grade>90)
        return 'O+';
    else if(grade>80 && grade<=90)
        return 'A+';
    else if (grade>70 && grade<=80)
        return 'B';
    else if(grade>60 && grade<=70)
        return 'C'
    else
        return 'F';


}

let arr=[90,89,56,80,92];
console.log(`Grade= ${calculateGrade(arr)}`);

//outputs Typecasting

function sum(num1,num2){
    return num1+num2;
}

console.log(sum(10,'ishi')); //10ishi(as number is typecasted into string)
console.log(sum(10,true));  //11
console.log(sum(true,'100'));  //true100
