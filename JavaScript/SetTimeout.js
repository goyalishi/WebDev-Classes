
// console.log("start");

// setTimeout(function(){   //browser method
//     console.log("timer of 3 s");
// },3000);

// console.log('end');

// (Example)

function step1(fn){
    setTimeout(function() {
        console.log('Selecting the image');
        fn('image');
    },3000);
    
}

function step2(img,fn){
    setTimeout(function() {
        console.log(`Filter the selected ${img}`);
        fn('filtered image');
    },2000);
    

}

function step3(filteredImg,fn){
    setTimeout(function() {
        console.log(`add caption to the${filteredImg}`);
        fn('final Image');
    },3000);
    
}

function step4(finalImg){
    setTimeout(function() {
        console.log(`${finalImg} uploaded successfully.`);
    },3000);
}


//CALL BACK HELL
step1(function (image){
    step2(image,function(filteredImg){
        step3(filteredImg,function(finalImg){
            step4(finalImg);
        })
    });
});


